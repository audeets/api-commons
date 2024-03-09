import https from 'https';
import http from 'http';
import fs from 'fs';

function createServer(app, defaultPort, defaultportSsl) {
  // Create HTTPS server
  if (process.env.NODE_ENV !== 'development') {
    var sslPort = normalizePort(process.env.PORT_HTTPS || defaultportSsl);
    https
      .createServer(
        {
          key: fs.readFileSync(`${process.env.PATH_SSL_KEY}`),
          cert: fs.readFileSync(`${process.env.PATH_SSL_CERT}`)
        },
        app
      )
      .listen(sslPort)
      .on('error', onError);
  }

  // Create HTTP server.
  var port = normalizePort(process.env.PORT_HTTP || defaultPort);
  http.createServer(app).listen(port).on('error', onError);
}

/**
 * Normalize a port into a number, string, or false.
 */
function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

/**
 * Event listener for HTTP server "error" event.
 */
function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error('requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error('is already in use');
      process.exit(1);
      break;
    default:
      console.error(error);
      throw error;
  }
}

export default { createServer };
