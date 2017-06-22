const http = require('http');

const server = http.createServer((req, res)=>{
    console.log(req);

    res.end('awdadawdawdw');
});

// server.on('request', (req, res)=>{
//     console.log(req.url);

//     res.end('awdadw');
// })

// server.on('error', error => console.log(error));

server.listen(2000);