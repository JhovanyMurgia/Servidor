const http = require('http');

const hostname = '127.0.0.1';
const porta =  process.env.porta || 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Acessando o servidor');
});

server.listen(porta, hostname, () => {
    console.log(`Server running at http://${hostname}:${porta}/`);
});
