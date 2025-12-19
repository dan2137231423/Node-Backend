export const ServerLoger =app.use((req,res,next)=>{
    if(req.path != '/api/hello'){
    console.log(`[${req.method}] ${req.path} - ${req.url}`)
    }
    next();
})