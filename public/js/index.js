var socket = io();

socket.on('connect', function() {
    console.log('Connected to server-index.');
    socket.on('updateRoomList', function(rooms) {
        console.log(rooms);
        rooms.forEach(function(room) {
            jQuery('#active__rooms').append(`<option value="${room}"`);
        });
    });
});
socket.on('disconnect', function() {
    console.log('Disconnected from server-chat-index.');
});