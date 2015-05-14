var http = require('http');
var url = require('url');
var querystring = require('querystring');

http.createServer(function(req, res) {
	var pathname = url.parse(req.url).pathname;
	res.writeHead(200,{'Content-Type':'application/json;charset=utf-8'});
	res.write('远端IP：'+req.socket.remoteAddress);
	console.log('远端IP：'+req.socket.remoteAddress);
	res.end();
}).listen(80);
console.log('Http Server is listening on port 80.');