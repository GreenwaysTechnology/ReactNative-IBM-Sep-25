//web server 
const http = require('http')

//web server
const server = http.createServer((req, res) => {
    res.end('hello rest')
})

server.listen(3000, () => {
    console.log('Webserver is ready')
})