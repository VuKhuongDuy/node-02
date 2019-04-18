const http = require('http');
const url = require('url');

let host = process.env.HOST || "0.0.0.0";
let port = process.env.PORT || 3000;

var server = http.createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/plain" });
    if (req.url == '/hello' && req.method === "GET")
        res.write('world')
    else if (req.url == '/hello' && req.method === 'POST')
        res.write('world created')
    else if (req.url == '/hello' && req.method === 'PUT')
        res.write('world updated')
    else if (req.url == '/hello' && req.method === 'DELETE')
        res.write('world deleted')
    res.end();
});

server.listen(port,host, () => { console.log(`Success ${host} on ${port}`)});