const socket = io();
socket.on('sendWelcome', (welcomeMessage)=>{
    console.log(welcomeMessage)
});

document.querySelector('#dataEntered').addEventListener('submit', (e)=>{
    e.preventDefault()

    const message = e.target.elements.message // better way of writing
    // const message = document.querySelector('input').value
    socket.emit('sendData', message)
})
socket.on('sendAllClients', (messageData)=>{
    console.log(messageData)
})