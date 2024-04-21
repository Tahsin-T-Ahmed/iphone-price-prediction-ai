import numpy as np
import pandas as pd
import os
import joblib
from sklearn.preprocessing import StandardScaler
from sklearn.linear_model import LinearRegression

data_path = "./iphones_linreg_output.csv"

iphones = pd.read_csv(data_path)

#drop unnamed column
iphones = iphones.iloc[:, 1:]

storage_dummies = [gb for gb in iphones.columns if "GB" in gb]

numerical_features = ["YEAR"]
binary_features = ["SPECIAL", "LARGE", *storage_dummies]

X = iphones[numerical_features + binary_features].astype(float)
X.loc[:, binary_features] = X.loc[:, binary_features].astype(int)
y = iphones["PRICE"]

scaler = StandardScaler()
scaler.fit(X.loc[:, numerical_features])
X.loc[:, numerical_features] = scaler.fit_transform(X.loc[:, numerical_features])

model = LinearRegression()
model.fit(X, y)

joblib.dump(scaler, "./scaler.joblib")
joblib.dump(model, "./iphones-linear-regression.pkl")