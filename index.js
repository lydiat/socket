var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http, {
    path: '/socket/socket.io'
})
var cors = require('cors')

app.use(cors());

app.all('/*', function(req, res, next) {
    console.log('all');
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.get('/', function(req, res) {
    console.log('get');
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket) {
    console.log('on');

    socket.on('chat message', function(msg) {
        io.emit('chat message', msg);
    });
});

port = process.env.PORT || 3000;

http.listen(port, function() {
    console.log('listening on ' + port);
});
