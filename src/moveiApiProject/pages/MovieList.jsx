import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { AppLoadingSpinner } from "../components/AppLoadingSpinner";
import { MovieCard } from "../components/MovieCard";
import { getMovieSearchResult } from "../rest-api/movie.api";

export const MovieList = () => {
    const [searchParams] = useSearchParams();
    const [loading, setLoading] = useState(true);
    const [moviesList, setMoviesList] = useState([]);

    const fetchData = async () => {
        const searchValue = searchParams.get("search");

        try {
            const moviesList = await getMovieSearchResult(searchValue);
            setMoviesList(moviesList.Search);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (loading) {
        return <AppLoadingSpinner />;
    }

    return (
        <>
            <div style={{ textAlign: "center", marginTop: 30 }}>
                <h2>Result for search - {searchParams.get("search")}</h2>
            </div>
            <div
                style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "40px",
                    justifyContent: "center",
                    marginBlock: "40px",
                }}
            >
                {moviesList.map((movieData, index) => (
                    <MovieCard
                        key={index}
                        title={movieData.Title}
                        image={movieData.Poster}
                        year={movieData.Year}
                        movieId={movieData.imdbID}
                    />
                ))}
            </div>
        </>
    );
};
