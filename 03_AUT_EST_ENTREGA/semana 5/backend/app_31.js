var http = require('http');
var fs = require('fs');
var path = require('path');
const hostname = '127.0.0.1';
const port = 3021;

const server = http.createServer((req, res) => {
    let fpath = path.join(
        "../",
        "frontend",
        req.url === "/" ? "index.html" : req.url
    );

    let ext = path.extname(fpath)
    let contentType = "text/html";
    switch (ext) {
        case '.css':
            contentType = 'text/css'
            break;
        case '.html':
            contentType = 'text/html'
            break;
    }
    
    res.statusCode = 200;
    res.setHeader('Content-Type', contentType);
    fs.readFile(fpath, null, function (error, data) {
        if (error) {
            res.writeHead(404);
            res.write('Whoops! File not found!');
        } else {
            res.write(data);
        }
        res.end();
    });
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});