from flask import Flask,Blueprint,request,jsonify
from flask_bcrypt import Bcrypt
from database.database import *
from flask_bcrypt import Bcrypt
import mysql.connector
import logging
from google.oauth2 import id_token
from google.auth.transport import requests
import os

bcrypt = Bcrypt()
register_app=Blueprint("register",__name__)

@register_app.route("/register",methods=["POST"])
def register():
    data=request.get_json()
    name=data["name"]
    email=data["email"]
    password=data["password"]

    conn=connection()
    cursor=conn.cursor()
    cursor.execute("SELECT * FROM users WHERE email=%s",(email,))
    user=cursor.fetchone()
    if user:
        logging.warning("User Already Exists")
        return jsonify({"message":"Email Already Exists!"}),400
    conn.close()
    
    hashed_password=bcrypt.generate_password_hash(password).decode("utf-8")
    registeruser(name,email,hashed_password)

    logging.info("User Registered Sucessfully")
    return jsonify({
        "message":"User Registration sucessfully"
    })

@register_app.route("/google", methods=["POST"])
def google_login():
    data = request.get_json()
    credential = data.get("credential")
    if not credential:
        return jsonify({"message": "Google credential missing"}), 400
    try:
        google_data = id_token.verify_oauth2_token(
            credential,
            requests.Request(),
            os.getenv("GOOGLE_CLIENT_ID")
        )
        google_id = google_data["sub"]
        email = google_data["email"]
        name = google_data.get("name")
        conn = connection()
        cursor = conn.cursor()
        cursor.execute(
            "SELECT * FROM users WHERE email=%s",
            (email,)
        )
        user = cursor.fetchone()
        if user:
            cursor.close()
            conn.close()
            return jsonify({
                "message": "Google login successful",
                "name": user[1],
                "email":user[2]
            }), 200
        
        cursor.execute(
            "INSERT INTO users(username, email, password) VALUES(%s, %s, %s)",
            (name, email, None)
        )
        conn.commit()
        cursor.close()
        conn.close()
        return jsonify({
            "message": "Google account created and login successful",
            "name": name,
            "email":email
        }), 200

    except ValueError:
        return jsonify({
            "message": "Invalid Google credential"
        }), 401

    
