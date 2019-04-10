var http = require('http');

var server = http.createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/plain" });
    if (req.url === '/hello' && req.method === "GET")
        res.end('world')
    else if (req.url === '/hello' && req.method === 'POST')
        res.end('world created')
    else if (req.url === '/hello' && req.method === 'PUT')
        res.end('world updated')
    else if (req.url === '/hello' && req.method === 'DELETE')
        res.end('world deleted')
});

server.listen(3000);