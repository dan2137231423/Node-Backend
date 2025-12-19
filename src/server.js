import express from "express";
import { ServerLoger } from ".middleware.js";
import router from "./routes/test.routes.js";

const app = express();
app.use(express.json())//middlewere

app.use(ServerLoger);

app.get("/",(req, res)=>{
    res.send("Hello World");
})

app.use("/",router)

app.listen(3000, ()=>{
    console.log("Server run in http://localhost:3000")
})

