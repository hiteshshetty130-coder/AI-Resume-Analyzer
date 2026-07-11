from flask_bcrypt import Bcrypt
from flask import Flask,Blueprint,jsonify,request
import mysql.connector

bcrypt = Bcrypt()
dashboard_app=Blueprint("dashboard",__name__)

@dashboard_app.route("/dashboard",methods=["POST"])
def dashboard():
    return jsonify({
        "message":"Dashboard page opened"
    })