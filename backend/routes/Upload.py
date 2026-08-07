from flask_bcrypt import Bcrypt
from flask import Flask,Blueprint,jsonify,request
import mysql.connector
import fitz
from docx import Document
import pandas as pd
import re
from google import genai
from routes.ai import aiRecom 


bcrypt = Bcrypt()
upload_app=Blueprint("upload",__name__)
csv_file="data/skills_en.csv"

def text_extraction(resume):
    filename=resume.filename.lower()
    text=""
    if filename.endswith(".pdf"):
        doc=fitz.open(stream=resume.read(),filetype="pdf")

        for page in doc:
            text+=page.get_text()
        
    elif filename.endswith(".docx"):
        doc=Document(resume)
        for page in doc.paragraphs:
            text+=page.text + "\n"
        
    elif filename.endswith(".txt"):
        text=resume.read().decode("utf-8")

    else:
        return None
    return text


def text_clean(text):
    text=text.lower()
    text=text.replace("\n"," ")
    text=" ".join(text.split())
    return text

def description_clean(text):
    text=text.lower()
    text=text.replace("\n"," ")
    text=" ".join(text.split())
    return text


def csv_reading(csv_file):
    df = pd.read_csv(csv_file)
    skills=df["Skill"].str.lower().tolist()
    return skills

def skills_extraction(text,skills):
    found_skills=[]
    for skill in skills:
        pattern=r"\b"+re.escape(skill)+r"\b"
        if re.search(pattern,text):
            found_skills.append(skill)
    return list(set(found_skills))



@upload_app.route("/upload",methods=["POST"])
def upload():
    skills = csv_reading(csv_file)

    resume = request.files["resume"]
    description = request.form.get("description", "").strip()
    description_file = request.files.get("jdFile")

    text = text_extraction(resume)

    if text is None:
        return jsonify({
            "message": "Unsupported Resume File Type"
        }), 400

    cleaned_text = text_clean(text)
    resume_skills = skills_extraction(cleaned_text, skills)

    # If JD file is uploaded, use it
    if description_file and description_file.filename != "":
        jd_text = text_extraction(description_file)

        if jd_text is None:
            return jsonify({
                "message": "Unsupported Job Description File Type"
            }), 400

        description_cleaned = description_clean(jd_text)

    # Otherwise use pasted text
    else:
        description_cleaned = description_clean(description)

    description_skills = skills_extraction(description_cleaned, skills)

    missing_skills = list(set(description_skills) - set(resume_skills))
    matched_skills = list(set(description_skills) & set(resume_skills))
    matched_percentage = (
        round((len(matched_skills) / len(description_skills)) * 100)
        if description_skills else 0
    )

    #ai-Recommendation file
    main_skills=aiRecom(missing_skills)
    recom=[line.strip() for line in main_skills.text.split("\n") if line.strip()]
    

    return jsonify({
        "main_skills":recom,
        "resume_skills": resume_skills,
        "description_skills": description_skills,
        "missing_skills": missing_skills,
        "matched_skills": matched_skills,
        "percentage": matched_percentage
    }), 200