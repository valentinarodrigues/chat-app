const socket = io();
document.querySelector('#increment').addEventListener('click', ()=>{
    console.log('Clicked me')
    socket.emit('changeCount')
})
socket.on('countUpdated', (count)=>{
    console.log(count)
})
socket.on('sendCount', ()=>{
    console.log('I am the client')
});

