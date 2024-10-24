const express = require("express");

const app = express();

app.get("/", (req, res) => {
    //root route http://localhost:5000/
    res.send("Hello :)");
});

app.listen(5000, () => console.log("Server running on port 5000"));