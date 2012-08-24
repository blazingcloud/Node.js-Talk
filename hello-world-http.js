var http = require('http');

var server = http.Server(function(req,res){
  res.writeHead(200, { 'content-type': 'text/plain' });
  res.end('hello world\n');
});

server.listen(8001);
