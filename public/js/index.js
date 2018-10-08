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

// socket.emit('createMessage', {
//     from: 'Frank',
//     text: 'Hi!'
// }, function(data) {
//     console.log('Got it. ', data);
// });

socket.on('newMessage', function(message) {
    console.log('Got new message: ', message);
    var li = jQuery('<li></li>');
    li.text(`${message.from}: ${message.text}`);
    jQuery('#messages').append(li);
});

socket.on('disconnect', function() {
    console.log('Disconnected from server.');
});

jQuery('#message-form').on('submit', function(event) {
    event.preventDefault();
    socket.emit('createMessage', {
        from: 'User',
        text: jQuery('[name=message]').val()
    }, function() {

    });
});