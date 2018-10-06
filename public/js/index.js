var socket = io();

socket.on('connect', function() {
    console.log('Connected to server.');

    // socket.emit('createEmail', {
    //     to: 'jen@example.com',
    //     text: 'Hey! This is Arkajit.'
    // });
    
    // socket.emit('createMessage', {
    //     to: 'arka@example.com',
    //     text: 'Happy Birthday!!',
    // });
});

// socket.on('newEmail', function(email) {
//     console.log('New email: ', email);
// });

socket.on('newMessage', function(message) {
    console.log('Got new message: ', message);
});

socket.on('disconnect', function() {
    console.log('Disconnected from server.');
});