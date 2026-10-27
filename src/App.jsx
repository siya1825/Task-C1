import "./style.css";

import {
    BrowserRouter,
    Routes,
    Route,
    Navigate
} from "react-router-dom";

import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Post from "./pages/Post";

import { auth } from "./firebase";

function App() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    const handleLogout = async () => {
        await signOut(auth);
    };

    if (loading) {
        return <p>Loading website...</p>;
    }

    return (
        <BrowserRouter>
            <Navbar user={user} onLogout={handleLogout} />

            <Routes>
                {/* Complete homepage is public */}
                <Route path="/" element={<Home />} />

                {/* Login */}
                <Route
                    path="/login"
                    element={user ? <Navigate to="/" replace /> : <Login />}
                />

                {/* Signup */}
                <Route path="/signup" element={<Signup />} />

                {/* Post requires login */}
                <Route
                    path="/post"
                    element={user ? <Post /> : <Navigate to="/login" replace />}
                />

                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>

            <Footer />
        </BrowserRouter>
    );
}

export default App;