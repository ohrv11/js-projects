import express from "express";
import dotenv from "dotenv"; 
import authRoutes from "./routes/auth.routes.js";
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

app.use("/api/auth", authRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));