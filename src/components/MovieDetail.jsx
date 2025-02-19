import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const API_TOKEN = import.meta.env.VITE_TMDB_ACCESS_TOKEN;
const BASE_URL = "https://api.themoviedb.org/3";

const MovieDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchMovieDetails = async () => {
            try {
                const response = await fetch(`${BASE_URL}/movie/${id}?language=en-US`, {
                    headers: {
                        accept: "application/json",
                        Authorization: `Bearer ${API_TOKEN}`,
                    },
                });
                if (!response.ok) throw new Error("Movie not found");
                const data = await response.json();
                setMovie(data);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        fetchMovieDetails();
    }, [id]);

    if (loading) return <p>Loading movie details...</p>;
    if (!movie) return <p>Movie not found.</p>;

    return (
        <div className="max-w-4xl mx-auto p-4">
            <button
                onClick={() => navigate("/")}
                className="mb-4 px-4 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-900 transition"
            >
                ← Back to Home
            </button>

            <div className="flex flex-col md:flex-row gap-6">
                <img
                    src={movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : "/no-movie.png"}
                    alt={movie.title}
                    className="w-full md:w-1/3 rounded-lg shadow-lg"
                />
                <div className="flex flex-col">
                    <h2 className="text-3xl font-bold">{movie.title}</h2>
                    <p className="text-white italic">{movie.tagline}</p>
                    <p className="mt-4 text-white">{movie.overview}</p>
                    <p className="mt-4 text-white"><strong>Release Date:</strong> {movie.release_date}</p>
                    <p className="text-white"><strong>Language:</strong> {movie.original_language.toUpperCase()}</p>
                    <p className="text-white"><strong>Rating:</strong> ⭐ {movie.vote_average.toFixed(1)}</p>

                    {movie.genres.length > 0 && (
                        <div className="mt-4">
                            <strong className="text-white">Genres:</strong>
                            <div className="flex gap-2 mt-2">
                                {movie.genres.map((genre) => (
                                    <span key={genre.id} className="px-3 py-1 bg-gray-700 text-white text-sm rounded-lg">
                                        {genre.name}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default MovieDetail;