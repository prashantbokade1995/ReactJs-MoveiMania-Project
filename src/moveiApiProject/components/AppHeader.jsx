import React from "react";
import { Container, Navbar } from "react-bootstrap";

export const AppHeader = () => {
    return (
        <header>
            <Navbar bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand href="/">Movie Mania</Navbar.Brand>
                </Container>
            </Navbar>
        </header>
    );
};
