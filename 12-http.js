const http = require('http')

const server = http.createServer((req,res) => {
    if (req.url === '/') {
        res.write('welcome to our homepage')
        res.end()
    }
    if (req.url === '/about') {
        res.write('here is our short history')
        res.end()
    }
    
    //default
    res.end('<h1>oops</h1>')
})

server.listen(5000)