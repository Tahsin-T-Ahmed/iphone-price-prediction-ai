import psycopg2
import os 

# READING PASSWORD FROM HIDDEN FILE: password.txt
pw_filepath = os.path.join(os.getcwd(), "password.txt")

dbpassword = open(pw_filepath, 'r').read()

conn = psycopg2.connect(
    host = "localhost",
    dbname = "iphone_prices",
    user = "postgres",
    password = dbpassword,
    port = 5432
)

cur = conn.cursor()

conn.commit()

cur.close()
conn.close()