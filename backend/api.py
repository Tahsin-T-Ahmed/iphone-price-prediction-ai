from flask import Flask
from flask_cors import CORS
import pandas as pd
import joblib

app = Flask(__name__)
CORS(app)