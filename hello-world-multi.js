setInterval(function() {
  console.log("world");
}, 5000);

console.log("Hello");

var http = require('http');
setInterval(function() {
  http.get({host: 'google.com' }, function(res){
    console.log(res.headers);
  });

}, 2000);

var s = http.Server(function(req,res){
  res.writeHead(200);
  setTimeout(function(){
    res.end("Hello World\n");
  }, 1000);
});

s.listen(8000);
