import React from 'react'

const MovieCard = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getMovies = async () => {
            const data = await fetchPopularMovies();
            setMovies(data);
            setLoading(false);
        };
        getMovies();
    }, []);

    if (loading) return <p>Loading movies...</p>;

    return (
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {movies.map((movie) => (
                <div key={movie.id} className="border rounded-lg overflow-hidden shadow-md">
                    <img
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                        alt={movie.title}
                        className="w-full h-auto"
                    />
                    <div className="p-2">
                        <h3 className="font-bold text-lg">{movie.title}</h3>
                        <p className="text-gray-500">⭐ {movie.vote_average}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default MovieCard;