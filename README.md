# IA03 – User Registration API with React Frontend

## 🎯 Overview
This project implements a **User Registration and Login System** with:
- **Backend:** NestJS + MongoDB (Mongoose)  
- **Frontend:** React (Vite) + React Query + React Hook Form + Tailwind CSS  

Users can register and log in through a simple web interface.

## 🧱 Folder Structure
```
ia03-user-registration/
│
├── backend/      # NestJS API
└── frontend/     # React (Vite) App
```

## ⚙️ 1. Backend Setup (NestJS)
### 📦 Install dependencies
```
cd backend
npm install
```
### 🧩 Environment Variables
Create a .env file in backend/ with:
```
MONGO_URI=mongodb+srv://<your_mongo_user>:<your_password>@cluster0.mongodb.net/userDB
PORT=5000
```
### 🚀 Run the backend server
```
npm run start:dev
```
Server runs at: http://localhost:5000

## 💻 2. Frontend Setup (React + Vite)
### 📦 Install dependencies
```
cd frontend
npm install
```
### 🚀 Run the development server
```
npm run dev
```
Frontend runs at: http://localhost:5173

## 🔌 3. API Endpoints
| Method | Endpoint         | Description         |
|--------|----------------|-------------------|
| POST   | /user/register | Register a new user |
| POST   | /user/login    | Login existing user |
## 🧠 4. Technologies Used
**Backend:** NestJS, Mongoose (MongoDB), bcrypt (password hashing), dotenv, CORS enabled  
**Frontend:** React (Vite), React Query, React Hook Form, Tailwind CSS

## 🧩 5. Features
- User registration (email + password)  
- Password hashing for security  
- Login with backend validation  
- Real-time form validation and loading states  
- Clear success/error messages  
- Responsive UI

## ✅ 6. Run Locally Summary
```bash
# 1️⃣ Start backend
cd backend
npm run start:dev

# 2️⃣ Start frontend
cd ../frontend
npm run dev

# 3️⃣ Visit app
http://localhost:5173

## 📦 7. Deployment (Optional)
- **Frontend:** Vercel / Netlify  
- **Backend:** Render / Railway / AWS  

Then update API URL in frontend/src/api/userApi.js:

const API = 'https://your-deployed-backend.com/user';
```
---
- Author: Vo Van Nam
- Student ID: 22120222
- Course: Advanced Web Development
- Assignment: IA03 – User Registration API with React Frontend
