import mysql.connector
import os

def connection():
    conn=mysql.connector.connect(host=os.getenv("DB_HOST"),
	    port=os.getenv("DB_PORT"),
        user=os.getenv("DB_USER")   ,
        password=os.getenv("DB_PASSWORD"),
        database=os.getenv("DB_NAME"))
    return conn

def registeruser(name,email,password):
    conn=connection()
    cursor=conn.cursor()
    cursor.execute("INSERT INTO users(username,email,password)VALUES(%s,%s,%s)",(name,email,password))
    conn.commit()
    cursor.close()
    conn.close()
