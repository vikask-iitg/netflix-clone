# 🎬 Netflix UI Clone (React + Firebase)

A Netflix-inspired **full-stack web application** built using **ReactJS**, **Firebase**, and **TMDB API**.  
The project focuses on modern UI, authentication, dynamic movie data, and responsive design.

---

## 🚀 Features

- User authentication (Sign up / Login / Logout)
- Movie browsing with multiple categories
- Dynamic movie data from TMDB API
- Trailer playback using YouTube embed
- Horizontally scrollable movie rows
- Responsive design for all devices
- Toast notifications and loading states

---

## 🛠️ Tech Stack

- **Frontend:** ReactJS, React Router, Vite, CSS
- **Backend:** Firebase Authentication, Firestore
- **API:** TMDB (The Movie Database)
- **Libraries:** React Toastify

---

## 📂 Project Structure

src/
├── components/ # Navbar, Footer, TitleCards
├── pages/ # Home, Login, Player
├── firebase.js
├── App.jsx
└── main.jsx

---


---

## 🔐 Authentication Flow

- Firebase email/password authentication
- User data stored in Firestore
- Auth state handled using `onAuthStateChanged`

---

## 🎬 Movie Functionality

- Fetches movies by category (Now Playing, Popular, Top Rated, Upcoming)
- Displays movie cards dynamically
- Clicking a movie opens a trailer player page

---

## 📱 Responsive UI

- Adaptive navbar and hero section
- Scalable movie cards
- Mobile-friendly layouts

---

## ⚙️ Setup & Run

```bash
npm install
npm run dev
