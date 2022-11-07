import React from "react";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export const HomePage = () => {
    const [searchValue, setSearchValue] = useState("");
    const [isFormComplete, setIsFormComplete] = useState(true);
    const navigate = useNavigate();

    const handleSubmitMovie = async (e) => {
        e.preventDefault();
        if (!searchValue) {
            setIsFormComplete(false);
            return;
        }

        navigate({
            pathname: "/movieList",
            search: `?search=${searchValue}`,
        });
    };

    const handleSearchChange = (e) => {
        const searchValue = e.target.value;
        setSearchValue(searchValue);
    };

    return (
        <div style={homePageStyles}>
            <Form style={{ width: "50%" }} onSubmit={handleSubmitMovie}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <div style={{ textAlign: "center" }}>
                        <Form.Label>
                            <h1>Search Movie</h1>
                        </Form.Label>
                    </div>

                    <Form.Control
                        onChange={handleSearchChange}
                        type="text"
                        placeholder="Enter Movie Title"
                        className="form-control form-control-lg"
                    />
                    {isFormComplete && (
                        <Form.Text className="text-muted">
                            Search any movie that you want
                        </Form.Text>
                    )}

                    {!isFormComplete && (
                        <Form.Text className="text-danger">
                            Please enter search value
                        </Form.Text>
                    )}
                </Form.Group>

                <div className="d-grid gap-2 col-4 mx-auto">
                    <Button variant="primary" type="submit">
                        Search
                    </Button>
                </div>
            </Form>
        </div>
    );
};

const homePageStyles = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
};
