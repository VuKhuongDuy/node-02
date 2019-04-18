// const http = require('http');
// const url = require('url');

// let host = process.env.HOST || "0.0.0.0";
// let port = process.env.PORT || 3000;

// var server = http.createServer(function (req, res) {
//     res.writeHead(200, { "Content-Type": "text/plain" });
//     console.log(req.method);
//     console.log(req.url);
//     if (req.url == '/hello' && req.method == "GET")
//         res.write('world')
//     else if (req.url == '/hello' && req.method == 'POST')
//         res.write('world created')
//     else if (req.url == '/hello' && req.method == 'PUT')
//         res.write('world updated')
//     else if (req.url == '/hello' && req.method == 'DELETE')
//         res.write('world deleted')
//     res.end();
// });

// server.listen(port,host, () => { console.log(`Success ${host} on ${port}`)});

const http = require ('http');
const url = require ('url');

const port = process.env.PORT;
const host = process.env.HOST;

const server = http.createServer(function(req, res){
    if (req.method == 'GET' && req.url == '/hello'){
        res.writeHead(200, {"Content-Type": "text/plain"});
        res.write('world');
        res.end();
    }
    else if (req.method == 'POST' && req.url == '/hello'){
        res.writeHead(200, {"Content-Type": "text/plain"});
        res.write('world created');
        res.end();
    }
    else if (req.method == 'PUT' && req.url == '/hello'){
        res.writeHead(200, {"Content-Type": "text/plain"});
        res.write('world updated');
        res.end();
    }
    else if (req.method == 'DELETE' && req.url == '/hello'){
        res.writeHead(200, {"Content-Type": "text/plain"});
        res.write('world deleted');
        res.end();
    }
    else{
        res.writeHead(200, {"Content-Type": "text/plain"});
        res.write('URL not found!');
        res.end();
    }
});
server.listen(port, host, function (err) {
   if (!err) console.log(`Server started ${host} on ${port}`);
   else console.log(err);
});