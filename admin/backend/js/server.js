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