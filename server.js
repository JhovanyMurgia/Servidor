const http = require('http');

const porta =  process.env.porta || 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Acessando o servidor');
});

server.listen(porta, () => {
    console.log(`Server rodando em http://localhost:${porta}`);
});
