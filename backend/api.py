from flask import Flask, request, jsonify
from flask_cors import CORS
import pandas as pd
import joblib

app = Flask(__name__)
CORS(app)

@app.route("/")
def serve_pred():
    df = pd.DataFrame(columns=["YEAR", "SPECIAL", "LARGE", *[f"GB_{2**i}" for i in range(6, 10+1)]])

    return "Placeholder"

if "__main__" == __name__:
    app.run(debug=True)