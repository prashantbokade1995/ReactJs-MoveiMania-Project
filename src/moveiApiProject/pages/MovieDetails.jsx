import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Card } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { AppLoadingSpinner } from "../components/AppLoadingSpinner";
import { getMovieDetails } from "../rest-api/movie.api";

export const MovieDetails = () => {
    const { movieId } = useParams();
    const [movieData, setMovieData] = useState({});
    const [loading, setLoading] = useState(true);

    const fetchData = async () => {
        try {
            const movieData = await getMovieDetails(movieId);

            setMovieData(movieData);
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
        <div className="container mt-4">
            <div className="row">
                <div className="col-4">
                    <Card>
                        <Card.Img variant="top" src={movieData.Poster} />
                    </Card>
                </div>
                <div className="col-8">
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                        }}
                        className="mb-2"
                    >
                        <h1>{movieData.Title}</h1>
                        <h2>IMDB Rating: {movieData.imdbRating}</h2>
                    </div>
                    <ul className="list-group list-group-flush bg-light border">
                        <li className="list-group-item bg-light">
                            <strong>Year: </strong>
                            <span>{movieData.Year}</span>
                        </li>
                        <li className="list-group-item bg-light">
                            <strong>Released on: </strong>
                            <span>{movieData.Released}</span>
                        </li>
                        <li className="list-group-item bg-light">
                            <strong>Runtime: </strong>
                            <span>{movieData.Runtime}</span>
                        </li>
                        <li className="list-group-item bg-light">
                            <strong>Genre: </strong>
                            <span>{movieData.Genre}</span>
                        </li>
                        <li className="list-group-item bg-light">
                            <strong>Director: </strong>
                            <span>{movieData.Director}</span>
                        </li>
                        <li className="list-group-item bg-light">
                            <strong>Actors: </strong>
                            <span>{movieData.Actors}</span>
                        </li>
                        <li className="list-group-item bg-light">
                            <strong>Language: </strong>
                            <span>{movieData.Language}</span>
                        </li>
                        <li className="list-group-item bg-light">
                            <strong>Country: </strong>
                            <span>{movieData.Country}</span>
                        </li>
                        <li className="list-group-item bg-light">
                            <strong>Awards: </strong>
                            <span>{movieData.Awards}</span>
                        </li>
                        <li className="list-group-item bg-light">
                            <strong>BoxOffice: </strong>
                            <span>{movieData.BoxOffice}</span>
                        </li>
                        <li className="list-group-item bg-light">
                            <strong>Plot: </strong>
                            <span>{movieData.Plot}</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};
