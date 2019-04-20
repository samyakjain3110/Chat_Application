const express = require('express');
const socket = require('socket.io');

// App setup
const app = express();
const server = app.listen(4000,function(){
    console.log('listening to requests on port 4000');
});

// Static files
app.use(express.static('public'));

//socket setup
let io = socket(server);

io.on('connection',function(socket){
    console.log('made a socket connection');
});