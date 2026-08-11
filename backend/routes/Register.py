from flask import Flask,Blueprint,request,jsonify
from flask_bcrypt import Bcrypt
from database.database import *
from flask_bcrypt import Bcrypt
import mysql.connector
import logging

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
