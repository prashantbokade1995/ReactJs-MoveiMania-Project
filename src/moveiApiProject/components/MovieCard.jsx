import React from "react";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export const MovieCard = ({ image, title, year, movieId }) => {
    const navigate = useNavigate();

    const handleMovieDetailsClick = () => {
        navigate(`/movie/${movieId}`);
    };

    return (
        <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{year}</Card.Text>
                <Button
                    onClick={handleMovieDetailsClick}
                    style={{ width: "100%" }}
                    variant="primary"
                >
                    See Details
                </Button>
            </Card.Body>
        </Card>
    );
};
