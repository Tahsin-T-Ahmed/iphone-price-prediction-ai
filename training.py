import numpy as np
import pandas as pd
import os
import joblib

data_path = "./iphones_linreg_output.csv"

iphones = pd.read_csv(data_path)

#drop unnamed column
iphones = iphones.iloc[:, 1:]

storage_dummies = [gb for gb in iphones.columns if "GB" in gb]

numerical_features = ["YEAR"]
binary_features = ["SPECIAL", "LARGE", *storage_dummies]

