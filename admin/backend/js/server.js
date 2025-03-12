const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json()); // Built-in middleware for parsing JSON

const PORT = 5000;

// Sample in-memory data
const activities = [];

// Routes

// Add Artwork
app.post("/api/artwork", (req, res) => {
    const { details } = req.body;
    activities.push({ date: new Date(), action: "Added", section: "Portfolio", details });
    res.status(201).json({ message: "Artwork added successfully!" });
 })

// Update Commission Status
app.post('/api/commission', (req, res) => {
    const { details } = req.body;
    activities.push({ date: new Date(), action: 'Updated', section: 'Commissions', details });
    res.status(201).json({ message: 'Commission status updated successfully!' });
});

// Add Convention
app.post('/api/convention', (req, res) => {
    const { details } = req.body;
    activities.push({ date: new Date(), action: 'Added', section: 'Conventions', details });
    res.status(201).json({ message: 'Convention added successfully!' });
});

// Write Blog Post
app.post('/api/blog', (req, res) => {
    const { details } = req.body;
    activities.push({ date: new Date(), action: 'Published', section: 'Blog', details });
    res.status(201).json({ message: 'Blog post published successfully!' });
});

// Get Recent Activities
app.get('/api/activities', (req, res) => {
    res.status(200).json(activities);
});