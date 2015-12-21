"use strict";

var h2 = require('http2');
var fs = require('fs');
var path = require('path');

var options = {
	key: fs.readFileSync('./localhost.key'),
	cert: fs.readFileSync('./localhost.crt')
};

var port = process.env.port || 8020;
var listenAddress = process.env.address || "0.0.0.0";

function OnRequest(req, res) {
	// ignore /favicon.ico with 404
	if (req.url == '/favicon.ico') { res.writeHead(404); res.end("404 Not Found\n"); return; }

	console.log("request: http/" + req.httpVersion + " " + req.method + " " + req.url);

	if (res.push && req.url === '/' && req.method == 'GET') {
		console.log("push: sending main.js");

		// tell which file we are about to push
		var push = res.push('/main.js');
		console.log("push: write header");
		push.writeHead(200, {'content-type': 'application/javascript'});

		// send the content
		console.log("push: write body");
		//fs.createReadStream(path.join(__dirname, '/main.js')).pipe(push);
		push.end('document.body.appendChild(document.createElement("P").appendChild(document.createTextNode("hello from push stream!")));\n');

		console.log("push: main.js done");
	}

	console.log("response: write header");
	res.writeHead(200, {"Content-Type": "text/html"});
	console.log("response: write body");
	res.end('<p>Hello World!</p>\n<script src="/main.js"></script>\n');
	console.log("response: done\n");
}

h2.createServer(options, OnRequest).listen(port, listenAddress);
console.log("server started; listening on " + listenAddress + ":" + port + "\n");
