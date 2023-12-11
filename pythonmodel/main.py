from sklearn.feature_extraction.text import CountVectorizer
from sklearn.preprocessing import StandardScaler
from sklearn.metrics.pairwise import cosine_similarity
import numpy as np

def get_recommendations(user_data, other_user_data):
    # Combine user data and other user data
    all_user_data = [user_data] + other_user_data

   # Extract relevant features for recommendation
    numerical_features = np.array([[user.get('Age', 0) or 0] for user in all_user_data])

    # Extract interests as text
    interests_text = [user.get('Interests', '') or '' for user in all_user_data]

    # Create a bag-of-words representation of interests
    vectorizer = CountVectorizer()
    interests_bow = vectorizer.fit_transform(interests_text).toarray()

    # Combine numerical and bag-of-words features
    features = np.concatenate((numerical_features, interests_bow), axis=1)

    # Normalize numerical features
    scaler = StandardScaler()
    features_normalized = scaler.fit_transform(features)

    # Calculate cosine similarity
    similarity_matrix = cosine_similarity(features_normalized)

     # Get recommendations for a user
    user_similarities = similarity_matrix[0]  # Assuming user_data is for the user at index 0
    recommended_users = [all_user_data[i].get("Id", None) for i in np.argsort(user_similarities)[::-1] if i != 0]

    print("Recommended users:", recommended_users)
    return recommended_users

# Example usage
user_data ={}

other_user_data =[]

import uvicorn
from fastapi import FastAPI,Request
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

origins = [
    "https://localhost:4200",
    "https://localhost:4200"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/test")
async def root():
    return {"Result": "Runing"}

@app.post("/get")
async def send(data : Request):
    req_data = await data.json()
    # print("Message from .Net : " , req_data)
    user_data=req_data['user_data']
    other_user_data=req_data['otherUsers']
   
    return {'recommended_users': get_recommendations(user_data,other_user_data)}
    
    
    return {
        "status" : "SUCCESS",
        "data" : req_data
    }

if __name__ == "__main__":
    uvicorn.run(app, port=8000)

