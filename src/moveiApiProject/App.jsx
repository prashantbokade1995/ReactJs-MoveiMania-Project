// import { Button, Form, Stack } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { AppFooter } from "./components/AppFooter";
import { AppHeader } from "./components/AppHeader";
import { HomePage } from "./pages/HomePage";
import { MovieDetails } from "./pages/MovieDetails";
import { MovieList } from "./pages/MovieList";

const App = () => {
    return (
        <div className="wrapper">
        <BrowserRouter>
            {/* Header Section */}
            <AppHeader />

            {/* Main Section */}
            <main>
                <Container style={{ height: "100%" }}>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/movieList" element={<MovieList />} />
                        <Route
                            path="/movie/:movieId"
                            element={<MovieDetails />}
                        />
                    </Routes>
                </Container>
            </main>

            {/* Footer Section */}
            <AppFooter />
            </BrowserRouter>
        </div>
    );
};

export default App;
