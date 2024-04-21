from flask import Flask, request, jsonify
from flask_cors import CORS
import numpy as np
import pandas as pd
import joblib

app = Flask(__name__)
CORS(app)

@app.route("/", methods=["POST"])
def serve_prediction():
    data = request.json
    
    #initialize DataFrame
    df = pd.DataFrame(columns=["YEAR", "SPECIAL", "LARGE", *[f"GB_{2**i}" for i in range(6, 10+1)]])

    #populate a row with zeroes
    df.loc[len(df), :] = np.zeros(len(df.columns))

    #cast DataFrame as int, for modeling and scaling purposes
    df = df.astype(int)

    df["YEAR"] = data["YEAR"]
    df["SPECIAL"] = data["SPECIAL"]
    df["LARGE"] = data["LARGE"]
    df[f"GB_{data['MEMORY']}"] = 1

    print(df)

    return request.json

if "__main__" == __name__:
    app.run(debug=True)