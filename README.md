🧑‍💼 AI Career Coach


This project is currently **under active development**.  
I’m building it step by step, and new features will be added soon. Stay tuned for updates! 🎉

An AI-powered full-stack career coaching platform built with Next.js 15, React 19, Gemini AI, Prisma, Clerk, and TailwindCSS. The platform helps users with mock interviews, resume building, career insights, and personalized job preparation — all in a sleek, modern UI.
**** still 

🚀 Features

🔐 Authentication – Secure login/signup powered by Clerk.

📊 Career Insights – Weekly AI-generated industry insights using Gemini AI + Inngest cron jobs.

🎤 AI Mock Interviews – Generate job-specific questions and get instant feedback.

📈 Performance Dashboard – Track interview results and improvement over time.

📝 AI Resume Builder – Create and download AI-generated resumes & cover letters in PDF.

🎨 Modern UI/UX – Built with Tailwind CSS & Shadcn UI for a clean and responsive experience.

⚡ Database Layer – Prisma + NeonDB for scalable, production-ready storage.

🔄 Server Actions & APIs – Secure backend with Next.js app router and Prisma.

☁️ Deployment Ready – Easily deployable on Vercel.

🛠️ Tech Stack

Frontend: Next.js 15 (React 19), TailwindCSS, Shadcn UI

Backend: Next.js App Router, Server Actions, Inngest

Database: Prisma ORM, NeonDB (PostgreSQL)

Auth: Clerk Authentication

AI: Google Gemini API (Career insights, resume, interview prep)

Other Tools: Zod (validation), Vercel (deployment)

📸 Screenshots

Add screenshots/gifs of your app here once deployed.

⚙️ Getting Started
Prerequisites

Make sure you have the following installed:

Node.js 18+

Git

A Clerk account (for authentication)

A Google Gemini API key

NeonDB / PostgreSQL setup

Installation
# Clone the  MY repo
# Navigate into the project
cd ai-career-coach  

# Install dependencies
npm install  

# Setup environment variables
cp .env.example .env.local  

# Run the dev server
npm run dev  

Environment Variables

Create a .env.local file with:

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_key  
CLERK_SECRET_KEY=your_clerk_secret  
DATABASE_URL=your_neondb_url  
GEMINI_API_KEY=your_gemini_key  

📚 Project Structure
/app
  /auth     # Clerk auth pages
  /dashboard # User dashboard
  /interview # AI Mock interview
  /resume    # Resume builder
  ...
/components  # Reusable UI components
/lib         # Utility functions & config
/prisma      # Database schema

🤝 Contributing

Contributions are welcome! Feel free to fork this repo and submit a PR.