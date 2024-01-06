process.env["NODE_CONFIG_DIR"] = `${__dirname}\\configs`;

import app from "./app";
import http from 'http';

// Get port from environment and store in Express.
const port = process.env.PORT || '3005';
app.set('port', port);

// Create HTTP server.
http.createServer(app).listen(port, function () {
    console.log("Server is running on port " + port)
});