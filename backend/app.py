from flask import Flask,request,jsonify
from flask_cors import CORS
from flask_bcrypt import Bcrypt
from database.database import *
import logging


app=Flask(__name__)
CORS(app)
bcrypt=Bcrypt(app)

logging.basicConfig(filename="app.log",level=logging.INFO,format="%(asctime)s- %(levelname)s-%(message)s")

from routes.Register import register_app
from routes.login import login_app
from routes.Upload import upload_app


app.register_blueprint(register_app)
app.register_blueprint(login_app)
app.register_blueprint(upload_app)




if __name__=="__main__":
    app.run(host="0.0.0.0",port=5000,debug=True)