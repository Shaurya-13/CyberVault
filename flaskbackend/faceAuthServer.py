import sqlite3
from flask import *
from flask_cors import CORS
import cv2 as cam
import numpy as py
import os
from mysql import *
import mysql.connector as connector
import face_recognition as face

# basic flask server configuration to work with the react app
app=Flask(__name__)
CORS(app)

database=[]

# for saving the image captures through opencv in a seperate folder (both LoginVerificationSnaps and RegistrationSnaps)
loginVerificationSnaps=os.path.join(os.getcwd(),"../Faces/LoginVerificationSnaps/")
registrationIdentificationSnaps=os.path.join(os.getcwd(),"../Faces/RegistrationIdSnaps/")

with sqlite3.connect("FacialAuthentication.db", check_same_thread=False) as connection:
    sqlCursor=connection.cursor()

try:
    sqlCursor.execute("""
    CREATE TABLE IF NOT EXISTS registeredFaces (
        registrationName VARCHAR(30) NOT NULL,
        encodedVal VARCHAR(10000) NOT NULL);
    """)
except sqlite3.Error:
    print('SQlite Server issue, could not execute query')



# make database in sql
# function to retrieve all data from the datbase(SQL)
def retrieveAllData():
    global database
    query='SELECT * FROM registeredFaces' # database table name
    try:
        sqlCursor.execute(query)
        resultSet=sqlCursor.fetchall()
        for i in resultSet:
            j=[]
            j.append(i[0])
            string=i[1][1:-2]
            numbers=[]
            for k in string.split():
                numbers.append(float(k.strip()))
            j.append(numbers)
            database.append(j)
    except sqlite3.Error:
        print('SQL server issue, unable to fetch all data!')
    
# registration route for the page which will save the face encoding with the name into the sql database
@app.route('/faceRegistration',methods=['GET'])
def faceRegistration():
    # using prepared-parameterized query statements to avoid SQL injection added with input validation on front-end (next)
    query="""INSERT INTO registeredFaces VALUES(?,?)""" 
    registrationName=request.args.get("name")
    # Grabbing a single frame of video form webcam
    faceCapture=cam.VideoCapture(0)
    ret,frame=faceCapture.read()
    # Resizing the frame of video to 1/4th size for faster face recognition processing
    smFrame=cam.resize(frame,(0,0),fx=0.25,fy=0.25)
    # Convert the frame image from BGR color (OpenCV compatible) to RGB color (face_recognition compatible)
    rgbSmFrame=smFrame[:,:,::-1]
    # detecting all the faces and computing face encodings in the current frame
    faceLocations=face.face_locations(rgbSmFrame)
    faceEncodingvalues=face.face_encodings(rgbSmFrame,faceLocations)
    if(faceEncodingvalues==[]):
        message="Face not detected"
    else:
        directory=os.path.join(registrationIdentificationSnaps,registrationName)
        if(not os.path.isdir(directory)):
            os.mkdir(directory)
        os.chdir(directory)
        randomNum=py.random.random_sample()
        cam.imwrite(str(randomNum)+".jpg",frame)
        faceCapture.release()
        cam.destroyAllWindows()
        encodedVal=""
        for i in faceEncodingvalues:
            encodedVal=encodedVal+str(i)+","
        if registrationName.replace(" ", "").isalpha(): # server side data validation - valid string
            checkQuery="""SELECT registrationName FROM registeredFaces WHERE registrationName=?"""
            try:
                sqlCursor.execute(checkQuery,(registrationName,))
                exists=sqlCursor.fetchall()
                if not exists:
                    list=[registrationName,encodedVal]
                    valForDB=tuple(list)
                    sqlCursor.execute(query,valForDB) # value prepared and added to db
                    connection.commit()
                    message="Registered"
                else:
                    message="Name already used"
            except sqlite3.Error:
                message='SQL server error, Could not register FaceID'
        else:
            message= "Registration name used is not valid"
    return message        

# function to compare the registered face encodings and identify the person thus verifying face
# or instructing user to register first
@app.route("/faceValidation")
def faceValidation():
    retrieveAllData()
    global database
    if(database==[]):
        message="Not in the system"
    else:
        identifiedFaceEncodings=[i[1] for i in database]
        identifiedFaceNames=[i[0] for i in database]
        faceLocations=[]
        faceEncodingValues=[]
        faceNames=[]
        faceCapture=cam.VideoCapture(0)
        ret,frame=faceCapture.read()
        smFrame=cam.resize(frame,(0,0),fx=0.25,fy=0.25)
        rgbSmFrame=smFrame[:,:,::-1]
        faceLocations=face.face_locations(rgbSmFrame)
        faceEncodingValues=face.face_encodings(rgbSmFrame,faceLocations)
        faceNames=[]
        if(faceEncodingValues==[]):
            message="Not in the system"
        else:
            for faceEncodedValue in faceEncodingValues:
                # Comparing the encodings
                matches=face.compare_faces(identifiedFaceEncodings,faceEncodedValue)
                name="Unknown"
                faceDistances=face.face_distance(identifiedFaceEncodings,faceEncodedValue)
                # using the known face with the smallest distance to the new face
                bestMatch=py.argmin(faceDistances)
                if matches[bestMatch]:
                    name=identifiedFaceNames[bestMatch]
                if(name=="Unkown"):
                    message="Not in the system"
                else:
                    message=name
                faceNames.append(name)
            #Creating a rectangluar boundary and setting its text label and color according to the name recognized for the frame
            for(top,right,bottom,left), name in zip(faceLocations,faceNames):
                top=top*4
                right=right*4
                bottom=bottom*4
                left=left*4
                cam.rectangle(frame,(left,top),(right,bottom),(0,0,255),2)
                cam.rectangle(frame, (left, bottom - 35), (right, bottom), (0, 0, 255), cam.FILLED)
                font=cam.FONT_HERSHEY_COMPLEX
                cam.putText(frame,name,(left+6,bottom-6),font,1.0,(255,255,255),1)
            os.chdir(loginVerificationSnaps)
            randomNum=py.random.random_sample()
            cam.imwrite(str(randomNum)+".jpg",frame)
    return message

if __name__=='__main__':
    app.run(debug=True)