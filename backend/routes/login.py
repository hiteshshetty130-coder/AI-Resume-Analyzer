from flask import Flask,Blueprint,request,jsonify
from flask_bcrypt import Bcrypt
from database.database import *
from flask_bcrypt import Bcrypt
import mysql.connector
import logging

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

    