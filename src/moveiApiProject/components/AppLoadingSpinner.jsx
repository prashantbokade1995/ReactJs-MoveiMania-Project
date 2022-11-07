import React from "react";
import { Spinner } from "react-bootstrap";

export const AppLoadingSpinner = () => {
    return (
        <Spinner
            style={{
                zoom: "1.5",
                position: "relative",
                top: "47%",
                left: "47%",
                zIndex: 100,
            }}
            animation="border"
            variant="primary"
        />
    );
};
