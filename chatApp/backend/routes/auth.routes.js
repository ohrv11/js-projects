import express from "express";
import { login, logout, signup } from "../controllers/auth.controlers.js";

//instead of creating the roots in the server file, 
//the auth routes shoulld be created in another file to
//avoid messy code
const router = express.Router();

router.get("/signup", signup);

router.get("/login", login );

router.get("/logout", logout);

export default router;