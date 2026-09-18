import { useState } from "react";

function Newsletter() {

    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("http://localhost:5000/subscribe", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ email })
            });

            const data = await response.json();

            if (response.ok) {
                setMessage("Successfully subscribed!");
                setEmail("");
            } else {
                setMessage(data.message || "Subscription failed.");
            }

        } catch (error) {
            console.error(error);
            setMessage("Unable to connect to the server.");
        }
    };

    return (
        <section id="subscribe">

            <h2>Subscribe to my Newsletter</h2>

            <p>
                Subscribe to receive updates and new articles.
            </p>

            <form onSubmit={handleSubmit}>

                <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />

                <button type="submit">
                    Subscribe
                </button>

            </form>

            {message && (
                <p className="subscribe-message">
                    {message}
                </p>
            )}

        </section>
    );
}

export default Newsletter;