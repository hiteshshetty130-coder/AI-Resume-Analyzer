from google import genai
from flask import Flask,Blueprint
import os


client=genai.Client(api_key=os.getenv("GEMINI_API_KEY"))

def aiRecom(missing_skills):
    prompt=f"""You are a technical career mentor.
    Missing Skills:{missing_skills}
    Generate Exactly 5 Personalized Learning Recommendations.
    Rules:
    -Each Recommendations must be one sentence only 
    -Maximum 15 words per Recommendations
    -Start Each Recommendationd with a Bullet (-).
    -Focus only on missing skills.
    -Do not add heading,instructions,conclusions, or explanations.
    -If there are fewer than 5 missing skills, give recommendations for the available skills only.
    
    Example:
    -Learn Docker by Containerizing  a simple Flask Application.
    -Pratice REST Api's by building CRUD endpoints in flask.
    -Use Git Daily and publish projects on GitHub.
"""

    response=client.models.generate_content(model="gemini-3.1-flash-lite",contents=prompt)
    return response
    


