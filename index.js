var express = require('express');
var app     = express();
var http = require('http').Server(app);
var io = require('socket.io')(http, {
    path: '/socket/socket.io'
})

app.get('/', function(req, res) {
    console.log('get');
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket) {
    io.emit('chat message', 'A user has joined');

    socket.on('chat message', function(msg) {
        console.log(msg);
        io.emit('chat message', msg);
    });
});

http.listen(8080, function() {
    console.log('listening on 8080');
});