const http = require('http');

const PORT = 8080;

const server = http.createServer();

server.on('request', (req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World');
});

server.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
});