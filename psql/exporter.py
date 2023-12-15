import psycopg2
import os 
import pandas as pd

# READING PASSWORD FROM HIDDEN FILE: password.txt
pw_filepath = os.path.join(os.getcwd(), "password.txt")

dbpassword = open(pw_filepath, 'r').read()

# CONNECTING TO POSTGRES DATABASE
conn = psycopg2.connect(
    host = "localhost",
    dbname = "iphone_prices",
    user = "postgres",
    password = dbpassword,
    port = 5432
)

cur = conn.cursor()

# GETTING RECORDS FROM DATABASE 

cur.execute("SELECT * FROM models;")

# getting field names 
fields = [field[0] for field in cur.description]

# creating empty dataframe with columns as field names
iphones = pd.DataFrame(columns=fields)

# populating dataframe with database records 
for record in cur.fetchall():
    iphones.loc[len(iphones)] = record

# closing connection to database
cur.close()
conn.close()

# EXPORTING DATAFRAME AS CSV FILE 
iphones.to_csv("./iphone_releases.csv", index=False)
