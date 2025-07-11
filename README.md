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
