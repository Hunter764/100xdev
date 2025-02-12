const express = require("express");
const bcrypt = require("bcryptjs");
const session = require("express-session");
const path = require("path");
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session({ secret: "secret-key", resave: false, saveUninitialized: true }));
app.use(express.static("public"));

// Dummy database
const users = [];
const people = [
    { name: "John Doe", age: 30 },
    { name: "Jane Smith", age: 25 },
    { name: "Alice Brown", age: 28 }
];

// Serve HTML page
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Signup route
app.post("/signup", async (req, res) => {
    const { username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    users.push({ username, password: hashedPassword });
    res.redirect("/");
});

// Login route
app.post("/login", async (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username);
    if (!user || !(await bcrypt.compare(password, user.password))) {
        return res.status(401).json({ message: "Invalid credentials" });
    }
    req.session.user = username;
    res.redirect("/people");
});

// Middleware to check authentication
const isAuthenticated = (req, res, next) => {
    if (req.session.user) {
        return next();
    }
    res.redirect("/");
};

// Protected route
app.get("/people", isAuthenticated, (req, res) => {
    res.sendFile(path.join(__dirname, "public", "people.html"));
});

// Logout route
app.post("/logout", (req, res) => {
    req.session.destroy(() => {
        res.redirect("/");
    });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
