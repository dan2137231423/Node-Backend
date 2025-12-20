import { Router } from "express";

const router = Router();

router.get('/api/test', (req, res)=> {
    res.status(418).json({message: "Hello, from our API"});
});

router.get('/api/test/:id', (req, res)=> {
    const id = req.params.id
    // http://localhost:3000/api/movie/12?limit=234&page=2
    console.log(req.query);
    res.json({message: "Hello, from our API", userId: id});
});

router.post('/api/test', (req, res) => {
    const user = req.body;
    const result = {message: "User created"};
    res.status(201).json({...user, ...result})
})

export default router;