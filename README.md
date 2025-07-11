# Bhakti Vriksha Web App

A free, serverless spiritual accountability web app for Bhakti Vriksha groups. Users can log in, track their Japa, Ekadashi, and Social Media activity, view top performers weekly, and receive personalized feedback.

---

## 🌐 Live Demo 

> \[Coming Soon]

---

## 🧭 Table of Contents

* [Features](#features)
* [Tech Stack](#tech-stack)
* [Recommended Tools](#recommended-tools)
* [Project Structure](#project-structure)
* [Setup Instructions](#setup-instructions)
* [Hosting Guide (Free)](#hosting-guide-free)
* [Weekly Automation (Friday at 5:30 PM)](#weekly-automation-friday-at-530-pm)
* [Sprint Plan](#sprint-plan)
* [Future Plans](#future-plans)

---

## ✅ Features

* Login/Signup authentication
* Landing page doubles as home
* Bottom tab navigation for all pages
* Tracker page with:

  * Japa Tracker
  * Ekadashi Tracker
  * Social Media Discipline Tracker
* Weekly compilation every Friday @ 5:30 PM:

  * Public leaderboard of top performers
  * Private personalized feedback

---

## ⚙️ Tech Stack

**Frontend:**

* React (with Vite)
* Tailwind CSS
* React Router

**Backend & Auth (Serverless):**

* Firebase (Auth, Firestore, Hosting)

**Automation:**

* GitHub Actions (Free scheduled cron job)

---

## 🌟 Recommended Tools

These are the best options chosen for simplicity, cost (free), and maintainability:

| Feature        | Tool                 | Reason                                                              |
| -------------- | -------------------- | ------------------------------------------------------------------- |
| Auth & Backend | **Firebase**         | Easy integration, free tier, great docs, handles Firestore & Auth   |
| Automation     | **GitHub Actions**   | Zero-cost cron job every Friday, no setup or ops overhead           |
| Hosting        | **Firebase Hosting** | Fast SPA hosting, free tier, integrates with rest of Firebase stack |

---

## 📁 Project Structure

```
project-root/
├── public/
├── src/
│   ├── components/
│   ├── pages/
│   ├── App.jsx
│   ├── main.jsx
├── firebase.json
├── .github/workflows/
├── package.json
└── README.md
```

---

## 🚀 Setup Instructions

### 1. Clone Repo

```bash
git clone https://github.com/your-username/bhakti-vriksha-app.git
cd bhakti-vriksha-app
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Firebase

* Go to [Firebase Console](https://console.firebase.google.com/)
* Create a new project
* Enable **Email/Password Auth** under Authentication
* Create a Firestore DB
* Add a web app and copy Firebase config
* Replace config in `firebase.js`

```js
// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = { ... };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
```

### 4. Run the App Locally

```bash
npm run dev
```

---

## 🌍 Hosting 

### 📦 Firebase Hosting

```bash
npm install -g firebase-tools
firebase login
firebase init hosting
# Select "dist" as build directory if using Vite
npm run build
firebase deploy
```

### 🚀 Alternative: Vercel

```bash
npm install -g vercel
vercel
```

---

## ⏰ Weekly Automation (Friday at 5:30 PM)

### GitHub Actions

Create `.github/workflows/scheduler.yml`

```yaml
name: Weekly Feedback Cron
on:
  schedule:
    - cron: '30 21 * * 5' # 5:30 PM EST = 9:30 PM UTC
jobs:
  send-feedback:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v3
      - name: Run Script
        run: |
          node scripts/generateWeeklyFeedback.js
```

---

## 🗓 Sprint Plan

### 🚩 Sprint 1: Project Setup & Landing Page

* Initialize project with Vite + React
* Set up Tailwind CSS
* Add React Router
* Build landing/home page UI
* Add conditional content based on login status

### 🛂 Sprint 2: Auth System (Login/Signup Page)

* Configure Firebase Auth
* Build login & signup forms
* Add route protection
* Store basic user info

### 📱 Sprint 3: Bottom Navigation + Routing

* Create bottom tab navigation
* Set up Home, Tracker, Profile pages
* Style active tab

### 📊 Sprint 4: Tracker Page Implementation

* Japa Tracker: date + count
* Ekadashi Tracker: toggle or type
* Social Media Tracker: scale 1–5
* Store per-day entries in Firestore

### 🧠 Sprint 5: Weekly Compilation Logic

* Use GitHub Actions to run Friday @ 5:30 PM
* Aggregate data from past 7 days
* Update leaderboard (public)
* Send personalized feedback (private)

### 🎯 Sprint 6: Final Polish & Deployment

* Responsive UI testing
* Final bug fixes
* Deploy using Firebase Hosting
* Share app with users for pilot testing

---

## 🚧 Future Plans

* ML-based feedback instead of hardcoded rules
* Admin dashboard for group leaders
* SMS/email reminders
* More trackers: Reading, Service, etc.
* Weekly graph view

---

## 🙏 Credits

Built with love for the Bhakti Vriksha community.

---

## 📬 Contact

Feel free to open an issue or email: `anuragamit35@gmail.com`
