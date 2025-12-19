import { Router } from "express"

const router = Router()

router.get("/api/test",(req,res)=>{
    res.json({message : "Hello World from API"})
})

router.get("/api/test:id",(req,res)=>{
    const id =req.params.id
    console.log(req.query)
    res.json({message:"Hello from Api",userId: id})
})

router.post('api/test',(req ,res)=>{
    const user = req.body;
    const result = {message:"User Created"}
    res.status(201).json({...user,...result})
})

export default router;