//make a connection
let socket = io.connect('http://localhost:4000');

//Query DOM
let message = document.getElementById('message');
let handle = document.getElementById('handle');
let btn = document.getElementById('send');
let output = document.getElementById('output');
let status = document.getElementById('status');

//Emit events
btn.addEventListener('click',function(){
    console.log('listening to the click on sent');
    socket.emit('chat',{
        message:message.value,
        handle:handle.value
    });
});

message.addEventListener('keypress',function(){
    console.log('listening to keypress on typing a message');
    socket.emit('typing',handle.value);
    console.log('socket.emit is sent to the server');
});

//listen for the events
socket.on('chat',function(data){
    status.innerHTML = "  ";
    output.innerHTML += '<p><strong>' + data.handle + ' : </strong>' + data.message + '</p>';
});

socket.on('typing',function(data){
    status.innerHTML = '<p><em>' + data + "is typing..." + '</p></em>';
});