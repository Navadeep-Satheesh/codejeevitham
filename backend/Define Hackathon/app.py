from flask import Flask, render_template, redirect, request, session, Blueprint , jsonify,send_from_directory

import mysql.connector
import requests
import cv2
from pyzbar.pyzbar import decode
import os
from gtts import gTTS
# from playsound import playsound

app = Flask(__name__)

app.config['CORS_HEADERS'] = 'Content-Type'
# app.config["SESSION_PERMANENT"] = False
# app.config["SESSION_TYPE"] = "filesystem"
# Session(app)



def connect():
    connection = mysql.connector.connect(user = 'admin' , password = 'definehack' , host = 'definehack2.crg4ku0quohi.ap-southeast-2.rds.amazonaws.com' , database = 'venders')

    cursor = connection.cursor()
    return connection , cursor 
@app.route('/')
def index():
    return render_template('index.html')





# @app.route("/validate" , methods = ["GET", "POST"])

def validate():
     
     
    # d =  request.json 
    # file = d.get("filename")
    file = "video.mp4"
    # video_path = r'C:\Users\ashvi\Downloads\Screen_Recording_2024-04-21_at_12.41.43_AM.mov'
    video_path = f'{file}'
    

    connection , cursor = connect()
    
    # Open the video file
    cap = cv2.VideoCapture(video_path)
    l = []
    while  len(set(l))<=2:

        while cap.isOpened():
                
                # Read a frame from the video
                ret, frame = cap.read()
                
                if not ret:
                    break
                
                # Convert the frame to grayscale
                gray_frame = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
                
                # Decode QR codes in the frame
                decoded_objects = decode(gray_frame)
                
                # Display information about detected QR codes
                for obj in decoded_objects:
                    # print("Data:", obj.data.decode('utf-8'))
                    l.append(obj.data.decode('utf-8'))
                
                # Display the frame with QR code boundaries
                for obj in decoded_objects:
                    (x, y, w, h) = obj.rect
                    cv2.rectangle(frame, (x, y), (x + w, y + h), (0, 255, 0), 2)
                
                # Display the frame
                cv2.imshow("QR Codes Detected", frame)
                
                # Check for key press to exit
                if cv2.waitKey(1) & 0xFF == ord('q'):
                    break
                print(set(l))
            

            # Release the video capture object and close windows
        cap.release()
        cv2.destroyAllWindows()
        l = list(set(l))

        # Path to the video file
        # video_path = ""
        # video_path = r'C:\Users\ashvi\Downloads\Screen_Recording_2024-04-21_at_12.41.43_AM.mov'
        # video_path = r'C:\Users\ashvi\Downloads\20240420_224003.mp4'
        # video_path = r'C:\Users\ashvi\Downloads\20240420_235020.mp4'
        # video_path = r'C:\Users\ashvi\Downloads\WhatsApp Video 2024-04-21 at 03.25.52_9879d83b.mp4'

        print("here")
        result = [ ]
        for item in l :
            
            cursor.execute(f"select * from venders where VID = '{item[6:]}'")
            d = cursor.fetchall()
            result.append(d)

        print(result)
        os.remove(file)
        for item in result:
            text = f"would u like to pay to '{item[0][3]}' managed by '{item[0][1]}'"
            language = 'en'
            myobj = gTTS(text=text, lang=language, slow=False)

            myobj.save(f"static/{item[0][3]}.mp3")
            print(item[0][3]+"hehe")
            k = item[0][3]+".mp3"
            os.system(f"start static/{k}")
            # playsound('welcome.mp3')
    
        return (result , 200)

        return ('', 200) 

@app.route('/upload', methods=['POST'])
def upload_file():
    if 'file' not in request.files:
        return "No file part"
    file = request.files['file']
    if file.filename == '':
        return "No selected file"
    file.save(file.filename)
    r=validate()
    return r


@app.route("/sign_in" , methods = ["GET", "POST"])

def sign_in():
    d = request.json
    email = d.get("email")
    password = d.get("password")
    connection , cursor = connect()
    cursor.execute(f"select passkey from user where email = '{email}'")
    data = cursor.fetchall()
    if len(data)>0:
        if data[0][0] == password:
            print(data)
            # session[email] = 'T'
            return ('', 200)
    
    return('' , 401)

# @app.route("/is_signed_in" , methods = ["GET", "POST"])

# def is_signed_in():
#     if session.get()
    
#     return('' , 401)




if __name__ == "__main__":

    app.run(debug = True, host = "0.0.0.0" , port = 8080)
    