import express from "express";

const app = express();

app.get("/",(req, res)=>{
    res.send("Hello World");
})

app.get("/api/hello",(req,res)=>{
    res.json({message : "Hello World from API"})
})

app.listen(3000, ()=>{
    console.log("Server run in http://localhost:3000")
})

