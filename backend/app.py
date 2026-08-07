from flask import Flask,request,jsonify
from flask_cors import CORS
from flask_bcrypt import Bcrypt
from database.database import *


app=Flask(__name__)
CORS(app)
bcrypt=Bcrypt(app)

from routes.Register import register_app
from routes.login import login_app
from routes.Upload import upload_app


app.register_blueprint(register_app)
app.register_blueprint(login_app)
app.register_blueprint(upload_app)




if __name__=="__main__":
    app.run(debug=True)