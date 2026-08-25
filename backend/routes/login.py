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
login_app=Blueprint("login",__name__)

@login_app.route("/login",methods=["POST"])
def login():
    data=request.get_json()
    email=data["name"]
    password=data["password"]

    conn=connection()
    cursor=conn.cursor()
    cursor.execute("SELECT * FROM users WHERE email=%s",(email,))
    users=cursor.fetchone()

    if not users:
        logging.warning("User Not Found")
        return jsonify({"message":"User not found"}),404
    
    if not bcrypt.check_password_hash(users[3],password):
        logging.warning("Invalid password Entered")
        return jsonify({"message":"Invalid password"}),401

    logging.info("Login Successful")
    return jsonify({"message":"user found",
                    "name":users[1]}),200

@login_app.route("/google", methods=["POST"])
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

    