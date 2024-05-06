from flask import Flask, request, send_file
# from flask_cors import CORS
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
# CORS(app)

#load predictive model (linear regression)
model = joblib.load("./iphones-linear-regression.pkl")

#load standard scaler for model
scaler = joblib.load("./scaler.joblib")

#import full dataset
iphones = pd.read_csv("iphone_releases.csv")

def transform_dataset(ds):
    #remove date, only keep year
    ds["year"] = ds["date"].str[:4]
    ds.drop("date", axis=1, inplace=True)

    #remove C and R variants
    ds = ds.loc[~(('C' == ds["edition"]) | ('R' == ds["edition"]))]

    # remove Mini variants
    ds = ds.loc[~("Mini" == ds["scale"])]

    #remove variants below 32GB
    ds = ds.loc[~(ds["memory"] < 32)]

    #transform "edition" to "special" and one-hot
    ds["special"] = ds["edition"]
    ds.loc[(("S" == ds["special"]) | ("Pro" == ds["special"])), "special"] = 1
    ds.loc[(ds["special"] != 1), "special"] = 0

    #transform "scale" to "large" and one-hot
    ds["large"] = ds["scale"]
    ds.loc[(("Plus" == ds["large"]) | ("Max" == ds["large"])), "large"] = 1
    ds.loc[(ds["large"] != 1), "large"] = 0

    return ds

iphones = transform_dataset(iphones)

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

def generate_graph(data):
    filter = iphones.copy()

    #prepare keys for filter
    keys = [key for key in data.keys()]
    keys.remove("year")
    keys.remove("price")

    #filter dataset based on user's selected values
    for key in keys:
        data[key] = int(data[key])
        filter = filter.loc[(filter[key] == data[key])]

    #replace NaN values with empty strings
    filter = filter.fillna(' ')

    #process annotation for data points
    filter["annotation"] = filter["version"]
    filter["annotation"] += filter["edition"].apply(lambda val: f' {val}' if val else '')
    filter["annotation"] += filter["scale"].apply(lambda val: f'\n{val}' if val else '')

    #add user's value to filter for graphing
    data["annotation"] = "Yours"
    data["version"] = "user"
    filter.loc[len(filter), :] = data

    #compile attributes of one-hot features (special, large) for string-building title
    attributes_list = []
    if data["special"]:
        attributes_list.append("Special-Edition")
    else:
        attributes_list.append("Standard-Edition")

    if data["large"]:
        attributes_list.append("Large-Sized")
    else:
        attributes_list.append("Regular-Sized")

    attributes = ', '.join(attributes_list)

    plt.scatter(x=filter["year"], 
                y=filter["price"],
                c=['orange' if "user" == version else "blue" for version in filter["version"]],
                s=[150 if "user" == version else 50 for version in filter["version"]])
    plt.ylim(0, data["price"] + 100)
    title = f"{attributes} iPhones with {data['memory']}GB"
    plt.title(title)

    max_price = filter["price"].max()
    print(max_price)

    for i, row in filter.iterrows():
        plt.annotate(row["annotation"],
                     (row["year"], row["price"] - (max_price // 9)),
                     ha="center",
                     fontsize=10)

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

    img = generate_graph(data)

    return send_file(img, mimetype="image/png") #placeholder

if "__main__" == __name__:
    app.run(debug=True)