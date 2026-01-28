import express from "express"
const app=express()

const port=3000

app.get('/',(req,res)=>{
    res.send("Home page")
    const method=req.method;
    const path=req.url;
    const time=new Date().getTime();
    console.log(`The method is: ${method} | The path is: ${path} | The time is:${time}`)   ;
})
app.get('/about',(req,res)=>{
    res.send("About page")
})
app.use((req,res)=>{
    res.status(404).send(`
        <h1>404 page not found</h1>
        <a href="/">back to home</a>`)
})

app.listen(port,()=>{
    console.log(`Server running on http://localhost:${port}`);
})