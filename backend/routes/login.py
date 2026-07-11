from flask import Flask,Blueprint,request,jsonify
from flask_bcrypt import Bcrypt
from database.database import *
from flask_bcrypt import Bcrypt
import mysql.connector

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
        return jsonify({"message":"User not found"}),404
    
    if not bcrypt.check_password_hash(users[3],password):
        return jsonify({"message":"Invalid password"}),401
    
    return jsonify({"message":"user found"}),200

    