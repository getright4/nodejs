const http = require('http');

const server= http.createServer((req,res)=>{
    if(req.url==="/"){
        res.end(`
        <h1>welcome to home page</h1>
      `  )
    }
    if(req.url==="/about"){
        res.end(`
      <h1>About page</h1>
       ` )
    }
    else{
        res.end(`
            <h1>wrong page</h1>
        `)
    }
})

server.listen('5000')