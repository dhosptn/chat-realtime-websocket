const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static('public')); // folder untuk file HTML/JS

io.on('connection', (socket) => {
  console.log('User connected');

  socket.on('chat message', (msg) => {
    io.emit('chat message', msg); // broadcast ke semua user
  });

  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});
