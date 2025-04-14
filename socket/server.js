const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require('socket.io');
const io = new Server(server, {
  cors: {
    origin: "https://chat-ui-ten-rouge.vercel.app/", 
    methods: ["GET", "POST"]
  }
});

const users = new Map();

io.on('connection', (socket) => {
  console.log('a user connected');

  socket.on('join', (username) => {
    users.set(socket.id, username);
    io.emit('userJoined', { username, message: `${username} joined the chat` });
  });

  socket.on('message', (message) => {
    const username = users.get(socket.id);
    io.emit('message', {
      username,
      text: message,
      timestamp: new Date().toISOString()
    });
  });

  socket.on('disconnect', () => {
    const username = users.get(socket.id);
    if (username) {
      users.delete(socket.id);
      io.emit('userLeft', { username, message: `${username} left the chat` });
    }
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});