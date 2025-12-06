import express from "express";
const router = express.Router(); 

router.get("/",(req,res)=>{
  res.render("layouts/login.ejs");
}); 

export default router;