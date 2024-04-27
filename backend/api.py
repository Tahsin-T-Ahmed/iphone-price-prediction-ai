from flask import Flask, request, jsonify
from flask_cors import CORS
import numpy as np
import pandas as pd
import joblib

app = Flask(__name__)
CORS(app)

#load predictive model (linear regression)
model = joblib.load("./iphones-linear-regression.pkl")

#load standard scaler for model
scaler = joblib.load("./scaler.joblib")

@app.route("/", methods=["POST"])
def serve_prediction():
    data = request.json
    
    #initialize DataFrame
    df = pd.DataFrame(columns=["YEAR", "SPECIAL", "LARGE", *[f"GB_{2**i}" for i in range(6, 10+1)]])

    #populate a row with zeroes
    df.loc[len(df), :] = np.zeros(len(df.columns))

    #cast DataFrame as int, for modeling and scaling purposes
    df = df.astype(int)

    #populate row with POST data 
    df["YEAR"] = data["year"]
    df["SPECIAL"] = data["special"]
    df["LARGE"] = data["large"]

    #cast MEMORY input as int
    data["memory"] = int(data["memory"])

    if data["memory"] != 32:
        df[f"GB_{data['memory']}"] = 1

    #cast "YEAR" feature as float type
    df["YEAR"] = df["YEAR"].astype(float)

    #standardize "YEAR" feature for modeling
    df.loc[:, "YEAR"] = scaler.transform(pd.DataFrame(df.loc[:, "YEAR"]))

    #produce prediction
    pred = model.predict(pd.DataFrame(df))

    print(df)

    return str(pred[0])

if "__main__" == __name__:
    app.run(debug=True)