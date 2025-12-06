import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv"; 
import Db from "./config/db.js"
dotenv.config({ path :"./config/config.env" });
import router from "./routes/index.js"; 
const app = express(); 




app.use(express.static("public"));
const PORT = process.env.PORT; 
//routes
app.use("/",router);



app.listen(PORT,(req,res)=>{
  console.log(`server running on ${PORT}`);
});
