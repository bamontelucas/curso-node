var http = require('http');

var server = http.createServer((req, res) => {
    res.end(`<html><body>página: ${req.url}</body></html>`);
});

server.listen(3000);