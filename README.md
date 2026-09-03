# 🤖 AI Resume Skill Gap & Job Market Analyzer

> **An AI-powered full-stack web application that analyzes resumes against job descriptions, identifies skill gaps, calculates a compatibility score, and provides personalized learning recommendations using Google Gemini AI.**

The **AI Resume Skill Gap & Job Market Analyzer** helps job seekers understand how well their resume matches a target job description and what skills they should improve to become a stronger candidate.

The application extracts skills from resumes and job descriptions, compares them, calculates a match score, identifies missing skills, and uses Generative AI to provide personalized recommendations.

---

## 🚀 Live Demo

🔗 **Live Application:** *Coming Soon*

🔗 **GitHub Repository:**
https://github.com/hiteshshetty130-coder/AI-Resume-Analyzer

---

## ✨ Features

### 📄 Resume Analysis

* Upload resumes in **PDF, DOCX, or TXT** format
* Extract text from uploaded resumes
* Automatically identify technical skills
* Compare resume skills against job requirements

### 💼 Job Description Analysis

* Paste a job description directly
* Upload a job description file
* Extract required skills automatically

### 📊 Skill Gap Analysis

* Calculate resume-to-job match percentage
* Identify **matched skills**
* Identify **missing skills**
* Highlight areas that require improvement

### 🤖 AI-Powered Recommendations

* Generate personalized learning recommendations using **Google Gemini AI**
* Recommend technologies and skills to learn
* Provide guidance based on identified skill gaps

### 🎨 Modern User Interface

* Responsive design
* Drag-and-drop file upload
* Clean and user-friendly interface
* Interactive analysis results

---

## 🏗️ Application Architecture

```text
                    ┌─────────────────────┐
                    │       User          │
                    └──────────┬──────────┘
                               │
                               ▼
                    ┌─────────────────────┐
                    │   React Frontend    │
                    │                     │
                    │  • Resume Upload    │
                    │  • Job Description  │
                    │  • Results UI       │
                    └──────────┬──────────┘
                               │
                         REST API
                               │
                               ▼
                    ┌─────────────────────┐
                    │    Flask Backend    │
                    │                     │
                    │ • File Processing   │
                    │ • Skill Extraction  │
                    │ • Match Calculation │
                    │ • API Handling      │
                    └──────┬───────┬──────┘
                           │       │
                 ┌─────────┘       └──────────┐
                 ▼                            ▼
        ┌─────────────────┐          ┌─────────────────┐
        │   MySQL DB      │          │  Gemini AI API  │
        │                 │          │                 │
        │ Application     │          │ AI Analysis &   │
        │ Data            │          │ Recommendations │
        └─────────────────┘          └─────────────────┘
```

---

## 🛠️ Tech Stack

### Frontend

* **React.js**
* **React Router**
* **JavaScript**
* **HTML5**
* **CSS3**

### Backend

* **Python**
* **Flask**
* **REST APIs**

### Database

* **MySQL**

### AI

* **Google Gemini API**

### Document Processing

* PDF processing
* DOCX processing
* TXT processing
* Automated text and skill extraction

### DevOps & Tools

* **Git**
* **GitHub**
* **Docker**
* **Docker Compose**
* **Linux / WSL**

---

## 📂 Project Structure

```text
AI-Resume-Analyzer/
│
├── frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── Dockerfile
│
├── backend/
│   ├── app.py
│   ├── requirements.txt
│   ├── Dockerfile
│   └── ...
│
├── docker-compose.yml
├── .env.example
├── .gitignore
└── README.md
```

> Project structure may change as new features are added.

---

## ⚙️ Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/hiteshshetty130-coder/AI-Resume-Analyzer.git

cd AI-Resume-Analyzer
```

---

### 2. Backend Setup

Navigate to the backend directory:

```bash
cd backend
```

Create a virtual environment:

```bash
python -m venv venv
```

Activate the virtual environment.

**Windows:**

```bash
venv\Scripts\activate
```

**Linux / macOS:**

```bash
source venv/bin/activate
```

Install dependencies:

```bash
pip install -r requirements.txt
```

Start the Flask server:

```bash
python app.py
```

The backend will run on:

```text
http://localhost:5000
```

---

### 3. Frontend Setup

Open another terminal:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Start the React development server:

```bash
npm run dev
```

The frontend will normally be available at:

```text
http://localhost:5173
```

---

## 🔐 Environment Variables

Create a `.env` file for sensitive configuration.

Example:

```env
GEMINI_API_KEY=your_gemini_api_key
DB_HOST=localhost
DB_PORT=3306
DB_USER=your_database_user
DB_PASSWORD=your_database_password
DB_NAME=your_database_name
```

> ⚠️ **Never commit your `.env` file or API keys to GitHub.**

Use `.env.example` to show the required variables without exposing credentials.

---

## 🐳 Running with Docker

The application can also be containerized using **Docker Compose**.

Build and start the application:

```bash
docker compose up --build
```

Run in detached mode:

```bash
docker compose up -d
```

Check running containers:

```bash
docker compose ps
```

View logs:

```bash
docker compose logs
```

Stop the application:

```bash
docker compose down
```

---

## 📊 How It Works

### Step 1 — Upload Resume

The user uploads a resume in PDF, DOCX, or TXT format.

### Step 2 — Provide Job Description

The user pastes or uploads a target job description.

### Step 3 — Extract Skills

The application processes the resume and job description and identifies relevant technical skills.

### Step 4 — Compare Skills

The extracted skills are compared to determine:

* Matched skills
* Missing skills
* Overall compatibility

### Step 5 — Calculate Match Score

A match percentage is generated based on the identified skills.

### Step 6 — Generate AI Recommendations

Google Gemini analyzes the skill gaps and generates personalized recommendations to help the user improve their profile.

---

## 📈 Future Improvements

The project can be extended with the following features:

* 📊 Resume history dashboard
* 📥 Export analysis reports as PDF
* 🌐 Job market trend analysis
* 🎯 AI-powered resume improvement suggestions
* 📚 Personalized learning roadmaps
* 🔎 Job recommendation system
* 📈 Historical match-score tracking
* ☁️ Cloud deployment
* 🔒 Production-grade security

---

## 🎯 Project Goals

The primary goals of this project are to:

* Help candidates understand their compatibility with job opportunities
* Identify missing technical skills
* Provide actionable learning recommendations
* Demonstrate practical full-stack development
* Apply Generative AI to a real-world problem
* Practice containerization and cloud deployment

---

## 🧑‍💻 Author

### Hitesh Shetty

**GitHub:**
https://github.com/hiteshshetty130-coder

**LinkedIn:**
https://www.linkedin.com/in/hitesh-shetty-4071663a1

---

## ⭐ Support

If you found this project useful or interesting, consider giving the repository a ⭐ on GitHub.

---

## 📄 License

This project is intended for educational and portfolio purposes.
