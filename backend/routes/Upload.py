from flask_bcrypt import Bcrypt
from flask import Flask,Blueprint,jsonify,request
import mysql.connector
import fitz
from docx import Document
import pandas as pd
import re

bcrypt = Bcrypt()
upload_app=Blueprint("upload",__name__)
csv_file="backend/data/skills_en.csv"

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
    skills=csv_reading(csv_file)
    resume=request.files["resume"]
    description=request.form["description"]
    text=text_extraction(resume)

    if text is None:
        return jsonify({
            "message": "Unsupported File Type"
        }),400
    
    cleaned_text=text_clean(text)
    description_text=description_clean(description)
    deteched=skills_extraction(cleaned_text,skills)
    
    return jsonify({
        "text": description
    }),200


    





