const express = require("express");

const app = express();

app.get("/health-checkup", function (req, res) { 
    const KidneyId = parseInt(req.query.KidneyId); // Parse query parameter as an integer
    const username = req.headers.username; // 
    const password = req.headers.password;

    //Username check

    if (username !== "Abhyudaya" || password !== "1234") { 
        res.status(401).json({
            message: "Invalid username or password",
        });
        return; // Early return to stop further execution
    }

    //for input validation

    if (KidneyId !== 1 && KidneyId !== 2) { // Check for valid KidneyId values
        res.status(411).json({
            msg: "Wrong inputs",
        });
        return;
    }

    res.send("Your Kidney is fine");
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
