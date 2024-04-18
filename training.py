import numpy as np
import pandas as pd
import os
import joblib
from sklearn.preprocessing import StandardScaler

data_path = "./iphones_linreg_output.csv"

iphones = pd.read_csv(data_path)

#drop unnamed column
iphones = iphones.iloc[:, 1:]

storage_dummies = [gb for gb in iphones.columns if "GB" in gb]

numerical_features = ["YEAR"]
binary_features = ["SPECIAL", "LARGE", *storage_dummies]

X = iphones[numerical_features + binary_features]
y = iphones["PRICE"]

scaler = StandardScaler()
scaler.fit(X[numerical_features])
X[numerical_features] = scaler.fit_transform(X[numerical_features])

