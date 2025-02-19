const BASE_URL = "https://api.themoviedb.org/3";
const API_TOKEN = import.meta.env.VITE_TMDB_ACCESS_TOKEN;

export const fetchMovies = async ({ query = "", page = 1 }) => {
    try {
        const endpoint = query
            ? `${BASE_URL}/search/movie?query=${query}&language=en-US&page=${page}`
            : `${BASE_URL}/discover/movie?include_adult=false&include_video=false&language=en-US&sort_by=popularity.desc&page=${page}`;

        const response = await fetch(endpoint, {
            method: "GET",
            headers: {
                accept: "application/json",
                Authorization: `Bearer ${API_TOKEN}`,
            },
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching movies:", error);
        return { results: [], total_pages: 1 };
    }
};