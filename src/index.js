const http = require('http');
const app = require('./app');

const HTTP_PORT = 8080;

const httpServer = http.createServer(app).listen(HTTP_PORT, () => {
  console.log(`app has started at: ${HTTP_PORT}`);
});

process.on('SIGTERM', () => {
  console.log('Shutting down!');

  httpServer.close(() => console.log('server shutdown -- goodbye!'));
});
