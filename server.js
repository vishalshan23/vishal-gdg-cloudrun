const http = require('http');
const server = http.createServer((req,res) =>{
    console.log('New Connection');
    res.end('OK');
    // new build test
})

const PORT = process.env.PORT || 8080
server.listen(PORT, () => console.log('Listening'))
