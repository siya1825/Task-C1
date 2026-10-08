import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "../firebase";

function Signup() {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const handleSignup = async (e) => {
        e.preventDefault();

        try {
            const userCredential = await createUserWithEmailAndPassword(
                auth,
                email,
                password
            );

            const user = userCredential.user;

            await setDoc(doc(db, "users", user.uid), {
                fullName: fullName,
                email: email
            });

            setMessage("Account created successfully!");

            setFullName("");
            setEmail("");
            setPassword("");
        } catch (error) {
            setMessage(error.message);
        }
    };

    return (
        <section className="signup-section">
            <div className="signup-card">

                <h2>Sign Up</h2>

                <p className="signup-subtitle">
                    Create your account to get started
                </p>

                <form onSubmit={handleSignup}>

                    <div className="signup-field">
                        <label>Full Name</label>

                        <input
                            type="text"
                            placeholder="Enter your full name"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            required
                        />
                    </div>

                    <div className="signup-field">
                        <label>Email</label>

                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div className="signup-field">
                        <label>Password</label>

                        <input
                            type="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    <button type="submit" className="signup-button">
                        Sign Up
                    </button>

                </form>

                {message && (
                    <p className="signup-message">
                        {message}
                    </p>
                )}

            </div>
        </section>
    );
}

export default Signup;