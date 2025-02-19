import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchMovies } from "../services/movieService";
import Search from "./Search";

const MovieList = () => {
    const [movies, setMovies] = useState([]);
    const [searchValue, setSearchValue] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getMovies = async () => {
            setLoading(true);
            const data = await fetchMovies({ query: searchValue, page: currentPage });
            setMovies(data.results);
            setTotalPages(data.total_pages);
            setLoading(false);
        };

        getMovies();
    }, [searchValue, currentPage]);

    const handlePageChange = (newPage) => {
        if (newPage > 0 && newPage <= totalPages) {
            setCurrentPage(newPage);
        }
    };

    if (loading) return <p>Loading movies...</p>;

    return (
        <div className="container mx-auto p-4">
            {/* Search Component */}
            <Search searchValue={searchValue} setSearchValue={setSearchValue} />

            <h1 className="text-3xl font-bold my-8">Popular Movies</h1>

            {/* Movie Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-4">
                {movies.map((movie) => (
                    <Link key={movie.id} to={`/movie/${movie.id}`} className="movie-card block">
                        <img
                            src={movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : "/no-movie.png"}
                            alt={movie.title}
                            className="w-full h-auto rounded-lg shadow-md hover:shadow-lg transition"
                        />
                        <div className="p-2">
                            <h3 className="font-bold text-lg">{movie.title}</h3>
                            <div className="content flex items-center gap-2 text-gray-500">
                                <div className="rating flex items-center">
                                    <img src="star.svg" alt="star icon" className="w-4 h-4" />
                                    <p>{movie.vote_average ? movie.vote_average.toFixed(1) : "N/A"}</p>
                                </div>
                                <span>•</span>
                                <p className="lang uppercase">{movie.original_language}</p>
                                <span>•</span>
                                <p className="year">
                                    {movie.release_date ? new Date(movie.release_date).getFullYear() : "N/A"}
                                </p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>

            {/* Pagination Controls */}
            <div className="flex justify-center items-center mt-6 space-x-2">
                <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="px-4 py-2 rounded-md bg-gray-700 text-white hover:bg-gray-900 transition disabled:opacity-50"
                >
                    ← Previous
                </button>

                <span className="px-4 py-2 bg-gray-800 text-white font-semibold rounded-md">
                    Page {currentPage} of {totalPages}
                </span>

                <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="px-4 py-2 rounded-md bg-gray-700 text-white hover:bg-gray-900 transition disabled:opacity-50"
                >
                    Next →
                </button>
            </div>
        </div>
    );
};

export default MovieList;