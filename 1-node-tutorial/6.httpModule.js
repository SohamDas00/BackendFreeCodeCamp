const http=require('http')
const port=5000;

const server=http.createServer((req,res)=>{
    if(req.url==='/'){
        res.end("This is home page")
    }
    else if(req.url==='/about'){
        res.end("This is about page")
    }
    else{
        res.end(`<h1>Opps</h1><p>This url not found 404</p> <a href='/'>home page</a>`)
    }
})

server.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`);    
})