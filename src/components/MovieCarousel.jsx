import { useEffect, useState } from "react";
import { fetchMovies } from "../services/movieService";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/autoplay";

const MovieCarousel = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const getMovies = async () => {
            const data = await fetchMovies({ page: 1 });
            setMovies(data.results.slice(0, 10)); // Limit to 10 movies
        };

        getMovies();
    }, []);

    return (
        <div className="w-[450px] max-w-3xl mx-auto my-8">
            <Swiper
                modules={[EffectCoverflow, Autoplay]}
                effect="coverflow"
                speed={1000}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={3}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 10,
                    depth: 150,
                    modifier: 2.5,
                    slideShadows: true,
                }}
                className="rounded-lg"
            >
                {movies.map((movie) => (
                    <SwiperSlide key={movie.id} className="w-48 h-72 relative">
                        <img
                            src={movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : "/no-movie.png"}
                            alt={movie.title}
                            className="w-full h-full object-cover rounded-lg transition-all duration-300"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 hover:opacity-100 transition flex items-end p-2 rounded-lg">
                            <h3 className="text-white text-sm font-semibold">{movie.title}</h3>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default MovieCarousel;