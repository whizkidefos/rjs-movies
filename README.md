# 🎬 Movie Finder App

A **modern, responsive, and feature-rich movie discovery app** built with **Vite, React, and TMDB API**. 

This app allows users to **search for movies, view popular films, navigate through an interactive carousel, and explore detailed movie pages** with a sleek UI.

---

## 🚀 Features

✅ **Live Search** – Find movies in real-time  
✅ **Pagination** – Browse movies page by page  
✅ **Interactive 3D Carousel** – Highlighted movies with a **stacked card effect**  
✅ **Movie Detail Pages** – Comprehensive information about each movie  
✅ **Back to Home Button** – Easy navigation  
✅ **Fully Responsive Design** – Works seamlessly on all devices  

---

## 🛠️ **Tech Stack**

- **Frontend:** React, Vite, Tailwind CSS
- **API:** The Movie Database (**TMDB API**)
- **Libraries:** Swiper.js (for the carousel), React Router DOM (for navigation)

---

## 🔧 **Installation & Setup**

### **1️⃣ Clone the Repository**
```sh
git clone https://github.com/whizkidefos/rjs-movies.git
cd rjs-movies

2️⃣ Install Dependencies
npm install

3️⃣ Create a .env File
VITE_TMDB_ACCESS_TOKEN=your_tmdb_api_bearer_token

4️⃣ Run the Development Server
npm run dev
📌 The app will be available at http://localhost:5173.

📸 Screenshots
🎡 Movie Carousel	🔍 Live Search	📜 Movie Detail Page

📌 Folder Structure
📦 movie-app
├── 📂 src
│   ├── 📂 components
│   │   ├── 📄 MovieList.jsx  // Displays list of movies
│   │   ├── 📄 MovieDetail.jsx  // Movie detail page
│   │   ├── 📄 MovieCarousel.jsx  // Interactive movie carousel
│   │   ├── 📄 Search.jsx  // Live search bar
│   ├── 📂 services
│   │   ├── 📄 movieService.js  // API requests to TMDB
│   ├── 📄 App.jsx  // Main application file
│   ├── 📄 main.jsx  // Vite entry point
│   ├── 📄 index.css  // Global styles
│── 📄 .env.local  // TMDB API key
│── 📄 package.json  // Dependencies
│── 📄 vite.config.js  // Vite config
│── 📄 README.md  // Project documentation

🌎 API Integration (TMDB)
Get Popular Movies
GET https://api.themoviedb.org/3/movie/popular

Search Movies
GET https://api.themoviedb.org/3/search/movie?query=your-query

Movie Details
GET https://api.themoviedb.org/3/movie/{movie_id}

🛠️ Features in Progress
🚧 Upcoming Enhancements:

🔄 Infinite Scroll for Movies
🎥 Watch Trailers within the App
🌙 Dark Mode Toggle

🏆 Contributing
We love contributions! If you'd like to add features or fix bugs, follow these steps:

Fork the repo
Create a branch: git checkout -b feature-name
Commit changes: git commit -m "Added feature"
Push to branch: git push origin feature-name
Create a Pull Request
📜 License
This project is MIT Licensed – free to use and modify.

⭐ Support & Feedback
If you like this project, consider starring ⭐ the repo!

For issues & suggestions, open an issue.

🎬 Enjoy discovering movies hassle-free! 🍿🚀