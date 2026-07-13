from flask_bcrypt import Bcrypt
from flask import Flask,Blueprint,jsonify,request
import mysql.connector

bcrypt = Bcrypt()
upload_app=Blueprint("upload",__name__)

@upload_app.route("/upload",methods=["POST"])
def upload():
    return jsonify({
        "message":"Dashboard page opened"
    })