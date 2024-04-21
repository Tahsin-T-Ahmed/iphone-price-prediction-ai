from flask import Flask, request, jsonify
from flask_cors import CORS
import numpy as np
import pandas as pd
import joblib

app = Flask(__name__)
CORS(app)

@app.route("/", methods=["POST"])
def serve_pred():
    df = pd.DataFrame(columns=["YEAR", "SPECIAL", "LARGE", *[f"GB_{2**i}" for i in range(6, 10+1)]])
    df.loc[len(df), :] = np.zeros(len(df.columns))

    return request.json

if "__main__" == __name__:
    app.run(debug=True)