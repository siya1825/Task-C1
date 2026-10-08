import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            await signInWithEmailAndPassword(auth, email, password);

            navigate("/");
        } catch (error) {
            setMessage(
                "Login failed. Please check your email and password or sign up."
            );
        }
    };

    return (
        <section className="login-section">
            <div className="login-card">
                <h2>Login</h2>

                <p className="login-subtitle">
                    Login to access DEV@Deakin
                </p>

                <form onSubmit={handleLogin}>
                    <div className="login-field">
                        <label>Email</label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div className="login-field">
                        <label>Password</label>
                        <input
                            type="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    <button type="submit" className="login-button">
                        Login
                    </button>
                </form>

                {message && (
                    <p className="login-message">
                        {message}
                    </p>
                )}

                <p className="signup-link">
                    Don't have an account?{" "}
                    <Link to="/signup">Sign Up</Link>
                </p>
            </div>
        </section>
    );
}

export default Login;