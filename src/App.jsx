import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MovieList from "./components/MovieList";
import MovieDetail from "./components/MovieDetail";
import MovieCarousel from "./components/MovieCarousel";

const App = () => {
  return (
    <Router>
      <main>
        <div className="pattern" />
        <div className="wrapper">
          <header>
            <MovieCarousel />
            <h1 className="text-center text-3xl font-bold mt-4">
              Find <span className="text-gradient">movies</span> you'll enjoy without the hassle.
            </h1>
          </header>

          <section className="container mx-auto p-4">
            <Routes>
              <Route path="/" element={<MovieList />} />
              <Route path="/movie/:id" element={<MovieDetail />} />
            </Routes>
          </section>
        </div>
      </main>
    </Router>
  );
};

export default App;