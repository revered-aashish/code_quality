import requests
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from typing import List
import json



from fastapi.middleware.cors import CORSMiddleware

# Initialize FastAPI
app = FastAPI()

# Allow all origins (you can be more restrictive if necessary)
origins = [
    "http://localhost:3000",  # Your frontend URL (adjust accordingly)
    "http://localhost:52464",  # Add other frontend URLs if needed
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,  # Allows your frontend to connect
    allow_credentials=True,
    allow_methods=["*"],  # Allows all methods
    allow_headers=["*"],  # Allows all headers
)

# Your other routes here...


# Initialize FastAPI
# app = FastAPI()

# Hugging Face API details
API_URL = "https://api-inference.huggingface.co/models/Salesforce/codeT5-base"
API_TOKEN = "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"
HEADERS = {"Authorization": f"Bearer {API_TOKEN}"}

# Pydantic model to handle code input
class CodeInput(BaseModel):
    code: str

# Pydantic model for questions
class Question(BaseModel):
    id: int
    question: str
    example_code: str

# Read questions from the JSON file (you can modify this to pull from a database later)
def get_questions() -> List[Question]:
    try:
        with open("app/question_data.json", "r") as file:
            questions = json.load(file)
            return [Question(**q) for q in questions]
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error loading questions: {str(e)}")

# Endpoint to get all questions
@app.get("/questions/", response_model=List[Question])
async def list_questions():
    return get_questions()

# Endpoint to get question by ID
@app.get("/questions/{question_id}", response_model=Question)
async def get_question(question_id: int):
    questions = get_questions()
    for question in questions:
        if question.id == question_id:
            return question
    raise HTTPException(status_code=404, detail="Question not found")

# Endpoint to evaluate code using Hugging Face API
# @app.post("/evaluate-code/")
# async def evaluate_code(input_data: CodeInput):
#     # Prepare payload for Hugging Face API
#     payload = {"inputs": f"Analyze OOP principles: {input_data.code}"}

#     # Make request to Hugging Face API
#     response = requests.post(API_URL, headers=HEADERS, json=payload)
    
#     if response.status_code != 200:
#         raise HTTPException(status_code=500, detail="Error processing request.")
    
#     # Return analysis result
#     result = response.json()
#     return {"analysis": result}

# @app.post("/evaluate-code/")
# async def evaluate_code(input_data: CodeInput):
#     payload = {"inputs": f"Analyze the following code for OOPs principles and also code quality: {input_data.code}"}
    
#     response = requests.post(API_URL, headers=HEADERS, json=payload)

#     # Log the response for debugging
#     print("Response Status Code:", response.status_code)
#     print("Response Text:", response.text)

#     if response.status_code != 200:
#         raise HTTPException(status_code=500, detail=f"Error from Hugging Face: {response.text}")
    
#     result = response.json()
#     analysis_text = result[0].get('generated_text', 'No analysis provided').strip().replace("\n", " ")

#     return {"analysis": {"principles": analysis_text, "status": "success"}}



@app.post("/evaluate-code/")
async def evaluate_code(input_data: CodeInput):
    payload = {"inputs": f"Analyze the following code for OOPs principles and also code quality: {input_data.code}"}
    
    response = requests.post(API_URL, headers=HEADERS, json=payload)

    # Log the response for debugging
    print("Response Status Code:", response.status_code)
    print("Response Text:", response.text)

    if response.status_code != 200:
        raise HTTPException(status_code=500, detail=f"Error from Hugging Face: {response.text}")
    
    result = response.json()
    analysis_text = result[0].get('generated_text', 'No analysis provided').strip().replace("\n", " ")

    return {"analysis": {"principles": analysis_text, "status": "success"}}

