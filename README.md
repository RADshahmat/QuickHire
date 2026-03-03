🚀 QuickHire – Job Board Application

QuickHire is a full-stack mini job board application built using Next.js (App Router), Redux Toolkit, Node.js/Express, and MongoDB.

The platform allows users to browse job listings, view detailed job descriptions, and apply for jobs. A basic admin interface enables job creation and deletion.

This project was developed as part of a software engineering technical evaluation to demonstrate frontend UI skills, backend API design, database structure, validation, and overall architecture.

🏗 Monorepo Structure

quickhire/
│
├── frontend/          # Next.js (App Router) + Redux Toolkit
├── backend/           # Express.js REST API
├── .gitignore
└── README.md
🛠 Tech Stack
Frontend

Next.js (App Router)

React.js

Redux Toolkit

Tailwind CSS

Axios

Backend

Node.js

Express.js

MongoDB (Mongoose)

Deployment (Optional)

Frontend: Vercel

Backend: Render / Railway

Database: MongoDB Atlas

✨ Features
👨‍💼 User Features
🔹 Job Listings Page

View all jobs

Search jobs by title/company

Filter by category and location

Fully responsive layout

🔹 Job Detail Page

Full job description

Apply Now form:

Name

Email

Resume link (URL)

Cover note

🔹 Application Submission

Data validated on frontend and backend

Email format validation

Resume link URL validation

🛠 Admin Features

Add new job listings

Delete existing jobs

Real-time update of job list

🗄 Database Models
Job

id

title

company

location

category

description

created_at

Application

id

job_id (reference to Job)

name

email

resume_link

cover_note

created_at

Relationship:

Job → has many → Applications
🔌 API Endpoints
Jobs

GET /api/jobs → Get all jobs

GET /api/jobs/:id → Get single job

POST /api/jobs → Create job (Admin)

DELETE /api/jobs/:id → Delete job (Admin)

Applications

POST /api/applications → Submit application

⚙️ How to Run Locally
1️⃣ Clone Repository
git clone https://github.com/your-username/quickhire.git
cd quickhire
2️⃣ Backend Setup
cd backend
npm install
Create .env file inside /backend
PORT=5000
MONGO_URI=your_mongodb_connection_string
Run Backend
npm run dev

Backend runs at:

http://localhost:5000
3️⃣ Frontend Setup

Open new terminal:

cd frontend
npm install
Create .env.local inside /frontend
NEXT_PUBLIC_API_URL=http://localhost:5000/api
Run Frontend
npm run dev

Frontend runs at:

http://localhost:3000
🔄 (Optional) Run Both with One Command

If root package.json includes concurrently:

From root:

npm install
npm run dev

This will start both frontend and backend together.

📦 Environment Variables
Backend

PORT

MONGO_URI

Frontend

NEXT_PUBLIC_API_URL

🎥 Demo Video

Loom / Screen Recording (3–5 minutes):

Demonstration includes:

Browsing job listings

Viewing job details

Applying to a job

Admin creating a job

Admin deleting a job

🔗 Demo Link: (Add Loom link here)

🌍 Live Deployment (Optional)

Frontend: (Add link here)
Backend API: (Add link here)

📂 Code Quality & Architecture

Component-based structure (App Router)

Redux Toolkit for state management

RESTful API structure

Clean folder organization

Reusable components

Proper validation

Responsive UI

Logical Git commit history

🚀 Future Improvements

Authentication for Admin

Pagination

File upload for resumes

Role-based access control

Better filtering system

Loading skeletons & improved UX

API rate limiting

📌 Submission Details

GitHub Repository: (Add link)
Demo Video: (Add link)
Live Link (if deployed): (Add link)

📄 License

This project was developed for technical evaluation purpo