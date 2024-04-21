# # from image_similarity_measures.evaluate import evaluation

# # evaluation(org_img_path="h.tif", 
# #            pred_img_path="h1.tif", 
# #            metrics=["rmse", "psnr"])




# import cv2
# from pyzbar.pyzbar import decode

# def decode_qr(frame):
#     # Convert the frame to grayscale
#     gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
    
#     # Decode QR codes in the frame
#     qr_codes = decode(gray)
    
#     # Loop through detected QR codes
#     for qr_code in qr_codes:
#         # Extract the bounding box coordinates of the QR code
#         x, y, w, h = qr_code.rect
        
#         # Draw a rectangle around the QR code
#         cv2.rectangle(frame, (x, y), (x + w, y + h), (0, 255, 0), 2)
        
#         # Extract the data from the QR code
#         qr_data = qr_code.data.decode('utf-8')
        
#         # Print the QR code data
#         print("QR Code Data:", qr_data)
        
#     return frame

# # Path to the video file
# # video_path = '"C:\\Users\\ashvi\\Downloads\\20240420_224003.mp4"'
# # video_path = r'C:\Users\ashvi\Downloads\20240420_224003.mp4'
# # video_path = r'C:\Users\ashvi\Downloads\20240420_224616.mp4'
# video_path = r'C:\Users\ashvi\Downloads\20240420_231012.mp4'


# # Initialize video capture
# cap = cv2.VideoCapture(video_path)

# while True:
#     # Capture frame-by-frame
#     ret, frame = cap.read()
    
#     # Check if the frame is successfully captured
#     if not ret:
#         break
    
#     # Decode QR codes in the frame
#     frame = decode_qr(frame)
    
#     # Display the resulting frame
#     cv2.imshow('QR Code Scanner', frame)
    
#     # Wait for 'q' key to exit
#     if cv2.waitKey(1) & 0xFF == ord('q'):
#         break

# # Release the capture
# cap.release()
# cv2.destroyAllWindows()




# import cv2
# from pyzbar.pyzbar import decode  # Correctly import decode

# def decode_qr(frame):
#     # Decode QR codes in the frame
#     qr_codes = decode(frame)
#     for qr_code in qr_codes:
#         # Extract the bounding box coordinates of the QR code
#         x, y, w, h = qr_code.rect
#         # Draw a rectangle around the QR code
#         cv2.rectangle(frame, (x, y), (x + w, y + h), (0, 255, 0), 2)
#         # Extract the data from the QR code
#         qr_data = qr_code.data.decode('utf-8')
#         # Print the QR code data
#         print("QR Code Data:", qr_data)
#     return frame

# # Path to the video file

# # video_path = r'C:\Users\ashvi\Downloads\20240420_235020.mp4'
# video_path = r'C:\Users\ashvi\Downloads\Screen_Recording_2024-04-21_at_12.41.43_AM.mov'



# # Initialize video capture
# cap = cv2.VideoCapture(video_path)

# while True:
#     # Capture frame-by-frame
#     ret, frame = cap.read()
    
#     # Check if the frame is successfully captured
#     if not ret:
#         break
    
#     # Decode QR codes in the frame
#     frame = decode_qr(frame)
    
#     # Display the resulting frame
#     cv2.imshow('QR Code Scanner', frame)
    
#     # Wait for 'q' key to exit
#     if cv2.waitKey(1) & 0xFF == ord('q'):
#         break

# # Release the capture
# cap.release()
# cv2.destroyAllWindows()




# import cv2
# from pyzbar.pyzbar import decode

# def preprocess_image(frame):
#     # Convert to grayscale
#     gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
#     # Enhance contrast
#     contrast_enhanced = cv2.equalizeHist(gray)
#     # Reduce noise
#     denoised = cv2.GaussianBlur(contrast_enhanced, (5, 5), 0)
#     return denoised

# def decode_qr(frame):
#     # Preprocess the frame
#     preprocessed_frame = preprocess_image(frame)
#     # Decode QR codes in the preprocessed frame
#     qr_codes = decode(preprocessed_frame)
#     for qr_code in qr_codes:
#         x, y, w, h = qr_code.rect
#         cv2.rectangle(frame, (x, y), (x + w, y + h), (0, 255, 0), 2)
#         qr_data = qr_code.data.decode('utf-8')
#         print("QR Code Data:", qr_data)
#     return frame

# # Path to the video file
# video_path = r'C:\Users\ashvi\Downloads\20240421_003627.mp4'

# # Initialize video capture
# cap = cv2.VideoCapture(video_path)

# while True:
#     ret, frame = cap.read()
#     if not ret:
#         break
#     frame = decode_qr(frame)
#     cv2.imshow('QR Code Scanner', frame)
#     if cv2.waitKey(1) & 0xFF == ord('q'):
#         break

# cap.release()
# cv2.destroyAllWindows()

import cv2
from pyzbar.pyzbar import decode

def read_qr_codes_from_video(video_path):
    # Open the video file
    cap = cv2.VideoCapture(video_path)
    l = []

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

# Path to the video file
# video_path = ""
# video_path = r'C:\Users\ashvi\Downloads\Screen_Recording_2024-04-21_at_12.41.43_AM.mov'
# video_path = r'C:\Users\ashvi\Downloads\20240420_224003.mp4'
# video_path = r'C:\Users\ashvi\Downloads\20240420_235020.mp4'
video_path = r'C:\Users\ashvi\Downloads\WhatsApp Video 2024-04-21 at 03.25.52_9879d83b.mp4'





# Call the function to read QR codes from the video
read_qr_codes_from_video(video_path)