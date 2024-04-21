from flask import Flask, request, jsonify
from flask_cors import CORS
import pandas as pd
import joblib

app = Flask(__name__)
CORS(app)

@app.route("/")
def serve_pred():

    return "Placeholder"

if "__main__" == __name__:
    app.run(debug=True)