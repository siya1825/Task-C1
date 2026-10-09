
import "./style.css";

import {
    BrowserRouter,
    Routes,
    Route,
    Navigate
} from "react-router-dom";

import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import Post from "./pages/Post.jsx";

import { auth } from "./firebase";

function App() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Check whether a user is logged in
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(
            auth,
            (currentUser) => {
                setUser(currentUser);
                setLoading(false);
            }
        );

        return () => unsubscribe();
    }, []);

    // Wait for Firebase to check authentication
    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <BrowserRouter>
            {/* Show navigation only when logged in */}
            {user && <Navbar />}

            <Routes>
                {/* Home page: login required */}
                <Route
                    path="/"
                    element={
                        user ? (
                            <Home />
                        ) : (
                            <Navigate
                                to="/login"
                                replace
                            />
                        )
                    }
                />

                {/* Login page */}
                <Route
                    path="/login"
                    element={<Login />}
                />

                {/* Always allow the Sign Up form to open */}
                <Route
                    path="/signup"
                    element={<Signup />}
                />

                {/* Post page: login required */}
                <Route
                    path="/post"
                    element={
                        user ? (
                            <Post />
                        ) : (
                            <Navigate
                                to="/login"
                                replace
                            />
                        )
                    }
                />

                {/* Redirect unknown routes */}
                <Route
                    path="*"
                    element={
                        <Navigate
                            to="/"
                            replace
                        />
                    }
                />
            </Routes>

            {/* Show footer only when logged in */}
            {user && <Footer />}
        </BrowserRouter>
    );
}

export default App;