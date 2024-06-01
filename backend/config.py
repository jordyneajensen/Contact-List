from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS 

app = Flask(_name_)
CORS(app)

app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite://mydatabase.db"