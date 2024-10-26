import express from "express";

//instead of creating the roots in the server file, 
//the auth routes shoulld be created in another file to
//avoid messy code
const router = express.Router();

router.get("/signup", (req, res) => {
    res.send("Sign Up Route");
});
router.get("/login", (req, res) => {
    res.send("Login Route");
});
router.get("/logout", (req, res) => {
    res.send("Logout Route");
});
export default router;