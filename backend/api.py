from flask import Flask, request, send_file
from flask_cors import CORS
import numpy as np
import pandas as pd
import joblib
import psycopg2
from psycopg2.extras import RealDictCursor
import matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt
from io import BytesIO

app = Flask(__name__)
CORS(app)

#load predictive model (linear regression)
model = joblib.load("./iphones-linear-regression.pkl")

#load standard scaler for model
scaler = joblib.load("./scaler.joblib")

@app.route("/pred", methods=["POST"])
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

    # print(df)

    return str(pred[0])

def generate_graph(df):

    plt.scatter(x=np.arange(7), y=[4, 8, 0, 1, 9, 9, 6])

    img = BytesIO()
    plt.savefig(img, format="png")
    img.seek(0)

    plt.clf()
    plt.close()

    return img

@app.route("/graph", methods=["POST"])
def serve_graph():
    data = request.json

    df = pd.DataFrame(data, index=[0])

    print(df)

    img = generate_graph(df)

    return send_file(img, mimetype="image/png") #placeholder

if "__main__" == __name__:
    app.run(debug=True)