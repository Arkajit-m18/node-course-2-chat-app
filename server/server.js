const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
    console.log('New user connected.');

    socket.emit('newEmail', {
        from: 'mike@example.com',
        text: 'Hey! What is going on?',
        createdAt: 123
    });

    socket.emit('newMessage', {
        from: 'june@example.com',
        text: 'Let\'s meet up at 6.',
        createdAt: 1234
    });

    socket.on('createEmail', (newEmail) => {
        console.log('Create email: ', newEmail);
    });

    socket.on('createMessage', (message) => {
        console.log('Create message: ', message);
    });

    socket.on('disconnect', () => {
        console.log('Client disconnected.');
    });
});

server.listen(port, () => {
    console.log(`Started server on port ${port}`);
});

