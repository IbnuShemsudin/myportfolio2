const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// 1. Configure the Email Transporter
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

// 2. The POST route
app.post('/api/contact', (req, res) => {
    const { from_name, from_email, message } = req.body;

    // --- FIX: We are defining mailOptions HERE ---
    const mailOptions = {
        from: process.env.EMAIL_USER, 
        to: process.env.EMAIL_USER,   
        subject: `🚀 New Message from ${from_name}`,
        html: `
            <div style="font-family: sans-serif; padding: 20px; border: 1px solid #eee;">
                <h2>New Portfolio Inquiry</h2>
                <p><strong>Name:</strong> ${from_name}</p>
                <p><strong>Email:</strong> ${from_email}</p>
                <p><strong>Message:</strong></p>
                <p style="background: #f9f9f9; padding: 10px;">${message}</p>
            </div>
        `
    };

    // --- NOW it is defined, so this will work ---
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error("Email Error:", error);
            return res.status(500).json({ error: error.message });
        }
        console.log("Email sent: " + info.response);
        res.status(200).json({ message: 'Success' });
    });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));