const { createServer } = require('node:http');

const hostname = '127.0.0.1';
const port = 3000;

//  The createServer() method of http creates a new HTTP server and returns it.
/*  
  The server is set to listen on the specified port and host name. 
  When the server is ready, the callback function is called, in this case informing us that the server is running.
  Whenever a new request is received, the request event is called, providing two objects: a request (an http.IncomingMessage object) and a response (an http.ServerResponse object).
  Those 2 objects are essential to handle the HTTP call.
  The first provides the request details. 
  The second is used to return data to the caller.
*/
const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
