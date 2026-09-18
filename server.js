
// Load variables from the .env file
require("dotenv").config();

// Import required packages
const express = require("express");
const cors = require("cors");
const formData = require("form-data");
const Mailgun = require("mailgun.js");

// Create an Express application
const app = express();

// Allow requests from the React frontend
app.use(cors());

// Allow Express to read JSON data sent from the frontend
app.use(express.json());

// Create Mailgun client
const mailgun = new Mailgun(formData);

const mg = mailgun.client({
    username: "api",
    key: process.env.MAILGUN_API_KEY
});

// Set the port number
const PORT = 5000;

// Subscribe route
app.post("/subscribe", async (req, res) => {

    const email = req.body.email;

    console.log("New subscriber:", email);

    if (!email) {
        return res.status(400).json({
            message: "Email is required."
        });
    }

    try {

        // Send welcome email
        const result = await mg.messages.create(
            process.env.MAILGUN_DOMAIN,
            {
                from: `DEV@Deakin <mailgun@${process.env.MAILGUN_DOMAIN}>`,
                to: [email],
                subject: "Welcome to DEV@Deakin!",
                text: "Welcome to DEV@Deakin! Thank you for subscribing to our newsletter."
            }
        );

        // Display successful Mailgun response
        console.log("Email sent successfully:", result);

        res.status(200).json({
            message: "Welcome email sent successfully!",
            email: email
        });

    } catch (error) {

        // Display error in terminal
        console.error("Email sending failed:", error);

        res.status(500).json({
            message: "Failed to send welcome email."
        });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});