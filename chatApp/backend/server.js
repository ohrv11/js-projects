import express from "express";
import dotenv from "dotenv"; 
import authRoutes from "./routes/auth.routes.js";
 //After installing the dotenv package, the server is now running on port 8000
const app = express();

dotenv.config();
 

//The port value will be either the one asigned
//in the .env file or the port 5000.
const PORT = process.env.PORT || 5000; 


//Port value assigned in the .env file

//root route http://localhost:5000/
app.get("/", (req, res) => {
    res.send("Hello :)");
});

//authroutes => calls the auth.routes.js file, which uses the controllers from the
//auth.controller.js file
app.use("/api/auth", authRoutes);


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
//with nodemon, each time that a change is done the port will
//keep running automatically unntil we stop it manually