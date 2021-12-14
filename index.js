const http = require('http');
const handlers = require('./handlers')
const port = process.env.PORT || 4500;

const server = http.createServer((req, res) => {


  for (let handle of handlers) {
    if (!handle(req, res)) {
      break;
    }
  }
})

server.listen(port, console.log(`server is running on port ${port}`));