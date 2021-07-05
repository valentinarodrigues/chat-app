const socket = io();
socket.on('sendWelcome', (welcomeMessage) => {
    console.log(welcomeMessage)
});

document.querySelector('#dataEntered').addEventListener('submit', (e) => {
    e.preventDefault()

    const message = e.target.elements.message // better way of writing
    // const message = document.querySelector('input').value
    socket.emit('sendData', message, (error)=>{
        if(error){
            return console.log(error);
        }
        console.log('Message was delivered!')
    })
})

document.querySelector('#send-location').addEventListener('click', (e) => {
    e.preventDefault()
    if (!navigator.geolocation) {
        return alert('Cannot get location')
    }

    navigator.geolocation.getCurrentPosition((position) => {
        socket.emit('sendLocation', { latitude: position.coords.latitude, longitude: position.coords.longitude }, ()=>{
            console.log('Location shared');
        })
    })
})

socket.on('sendAllClients', (messageData) => {
    console.log(messageData)
})