const express = require("express");
const http = require("http");
const WebSocket = require("ws");

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });



// WebSocket connection handler
wss.on("connection", (ws) => {
  console.log("Client connected");
    ws.send("Hello");
  // Event listener for messages from clients
  ws.on("message", (message) => {
    console.log(`Received message: ${message}`);
      ws.send("thanks buddy");
  
  });
});

// Start the server
server.listen(3000, () => {
  console.log("Server started on port 3000");
});
