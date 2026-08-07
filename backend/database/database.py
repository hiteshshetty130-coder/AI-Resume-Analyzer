import mysql.connector

def connection():
    conn=mysql.connector.connect(host="localhost",
        user="root",
        password="Mogaveeraxi@19",
        database="resumeanalyzer")
    return conn

def registeruser(name,email,password):
    conn=connection()
    cursor=conn.cursor()
    cursor.execute("INSERT INTO users(username,email,password)VALUES(%s,%s,%s)",(name,email,password))
    conn.commit()
    cursor.close()
    conn.close()