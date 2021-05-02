var http = require('http');
var os = require("os");
var color = setColor();
var hostname = os.hostname();

http.createServer(function (request, response) {
  let requestInfo = JSON.stringify(getRequestInfo(request),null, 4)
  console.log(requestInfo)
   response.writeHead(200, {'Content-Type': 'text/html'});
   response.end(`<body style="background-color:${color};"><h1>Host: ${hostname}</h1><pre id="json"><code>${requestInfo}</code></pre></body>`
   )

}).listen(process.env.PORT || 8080);

function getRequestInfo(request) {

    let result = {}
    result["request_method"] = request.method
    result["request_path"] = request.url
    result["request_headers"] = request.headers

    return result
}

function setColor() {
  let color = process.env.COLOR || "white"
  if (color == "random") {
    color = getRandomColor();
  }
  console.log(`Using ${color} background color`);
  return color;
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
