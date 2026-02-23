🎵 XOSHELF

A modern web-based music streaming application showcasing the discography of The Weeknd (Abel Tesfaye).

🌐 Live Demo:
https://xoshelf.vercel.app/

🚀 Overview

XOSHELF is a web-based music streaming platform that allows users to stream a curated collection of songs by The Weeknd directly from the browser.

The project demonstrates real-world deployment practices including:

Cloud-based media storage

Git version control management

Production deployment workflows

Build error troubleshooting

CI/CD integration

This project was deployed and managed in a real production environment.

✨ Features

🎵 Stream music directly in the browser

📂 Organized discography collection

☁️ Cloud-based media hosting

⚡ Fast production deployment

📱 Fully responsive UI

🔄 Automatic redeployment via GitHub push

🌐 Publicly accessible live hosting

🛠 Tech Stack
Frontend

React.js

HTML5

CSS3

JavaScript (ES6+)

Backend / Services

Node.js

Express.js (if applicable)

Cloud-based media hosting

Deployment & DevOps

Vercel (Frontend Hosting)

Git

GitHub

CI/CD via GitHub → Vercel integration

📂 Project Structure
xoshelf/
│
├── public/
├── src/
│   ├── components/
│   ├── pages/
│   ├── assets/
│   └── App.js
│
├── package.json
├── package-lock.json
└── README.md
⚙️ Installation (Run Locally)

Clone the repository:

git clone https://github.com/flatspinach/xoshelf.git
cd xoshelf

Install dependencies:

npm install

Start development server:

npm start

Build for production:

npm run build
🌍 Deployment

The application is deployed using Vercel.

Production builds are automatically triggered on push to the main branch.

Each commit creates a new deployment instance.

The latest successful build is automatically promoted to production.

🧠 Key Learnings From This Project

Handling large Git repositories and cleaning commit history

Resolving remote push conflicts

Fixing dependency issues during production builds

Managing media files through cloud storage

Debugging Vercel build failures

Implementing CI/CD workflow

🔒 Future Improvements

🔐 User authentication system

🎶 Playlist creation feature

🔎 Search & filtering functionality

❤️ Like / Favorite system

🛠 Admin dashboard

🌙 Dark mode

⚡ Performance optimization

📈 Why This Project Matters

This project demonstrates:

Full deployment lifecycle management

Real-world debugging under production constraints

Version control conflict resolution

Cloud hosting and storage integration

End-to-end application delivery

It reflects hands-on experience with production deployment rather than just local development.

GitHub: https://github.com/flatspinach
