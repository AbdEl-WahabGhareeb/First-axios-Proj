import axios from "axios";
import React, { useEffect, useState } from "react";
import Loader from "../Loader/Loader";

export default function Movies() {
    const [isLoading, setIsLoading] = useState(true);
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        getMovies();

        return () => {};
    }, []);

    async function getMovies() {
        let { data } = await axios.get(
            "https://api.themoviedb.org/3/trending/all/day?api_key=32b3ca49502a10618d9bc27768fd5119&page=1"
        );

        setMovies(data.results);
        console.log(data.results);

        setIsLoading(false);
    }

    return (
        <>
            <div className=" movies text-center">
                <div className="container pb-5">
                    {isLoading ? <Loader /> : null}
                    <div className="row g-4">
                        {movies.map((movie) => (
                            <div key={movie.id} className="col-md-4">
                                <div className="inner p-3">
                                    <div
                                        className="image-container"
                                        style={{
                                            height: "400px",
                                            overflow: "hidden",
                                            marginBottom: "1rem",
                                        }}
                                    >
                                        <img
                                            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                                            style={{
                                                width: "100%",
                                                height: "100%",
                                                objectFit: "fill",
                                            }}
                                            alt={movie.title || movie.name}
                                        />
                                    </div>
                                    <h2 className="h4 my-3">
                                        {movie.title ? movie.title : movie.name}
                                    </h2>
                                    <p>
                                        {movie.overview
                                            .split(" ")
                                            .slice(0, 10)
                                            .join(" ")}
                                        ...
                                    </p>
                                    <a
                                        href={`https://www.themoviedb.org/movie/${movie.id}`}
                                        className="btn btn-outline-light w-100 mt-3"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        View Details
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
