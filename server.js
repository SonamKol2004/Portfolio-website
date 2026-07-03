require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");


const projectRoutes = require("./routes/projectRoutes");
const profileRoutes = require("./routes/profileRoutes");
const contactRoutes = require("./routes/contactRoutes");

const app = express();

app.use(cors());
app.use(express.json());

// Connect Database
console.log("MONGO_URL=", process.env.MONGO_URI);
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

// Routes
console.log("EMAIL_USER:", process.env.EMAIL_USER);
console.log("EMAIL_PASS:", process.env.EMAIL_PASS ? "Loaded" : "Not Loaded");
console.log("projectRoutes:", projectRoutes);
console.log("profileRoutes:", profileRoutes);
console.log("contactRoutes:", contactRoutes);
app.use("/api/projects", projectRoutes);
app.use("/api/profile", profileRoutes);
app.use("/api/contact", contactRoutes);

// Home Route
app.get("/", (req, res) => {
    res.send("Portfolio API Running...");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});