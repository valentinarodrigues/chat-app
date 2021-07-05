const socket = io();
socket.on('sendWelcome', (welcomeMessage) => {
    console.log(welcomeMessage)
});

document.querySelector('#dataEntered').addEventListener('submit', (e) => {
    e.preventDefault()

    const message = e.target.elements.message // better way of writing
    // const message = document.querySelector('input').value
    socket.emit('sendData', message, (msg)=>{
        console.log('the message was delivered', msg);
    })
})

document.querySelector('#send-location').addEventListener('click', (e) => {
    if (!navigator.geolocation) {
        return alert('Cannot get location')
    }

    navigator.geolocation.getCurrentPosition((position) => {
        socket.emit('sendLocation', { latitude: position.coords.latitude, longitude: position.coords.longitude }, ()=>{
            console.log('Message was delivered');
        })
    })
})

socket.on('sendAllClients', (messageData) => {
    console.log(messageData)
})