var http = require('http');

//create a server object:
http.createServer(function (req, res) {
  res.write('Hello World; Ranjit Rupnawar here,hosting Node application using npm build '); //write a response to the client
  res.end(); //end the response
}).listen(80); //the server object listens on port 80
