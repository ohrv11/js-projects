import express from "express";
import dotenv from "dotenv"; 
 //After installing the dotenv package, the server is now running on port 8000
const app = express();

dotenv.config();
//with nodemon, each time that a change is done the port will
//keep running automatically unntil we stop it manually 

const PORT = process.env.PORT || 5000; //The port value will be either the one asigned
//in the .env file or the port 5000.

//Port value assigned in the .env file

app.get("/", (req, res) => {
    //root route http://localhost:5000/
    res.send("Hello :)");
});

app.get("/api/auth/signup", (rq, res) => {
    console.log("sign up route");
    });

app.get("/api/auth/login", (rq, res) => {
    console.log("login route");
    });

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));