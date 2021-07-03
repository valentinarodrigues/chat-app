# chat-app

Web sockets!!

- Allows full duplex communication (bidirectional communication)
- Persistent connection between client and server 
- Separate protocol than HTTP


Documentation
- socket.io

When we work with sockets we send and receive events
Emit events - socket.emit('eventname') 
Emit events - socket.emit('eventname', data) // if data is required 
Listen to the emitted events - socket.on('eventname', callback_function())
Listen to the emitted events - socket.on('eventname', callback_function(data))

Socket exist both client and server side

BroadCast event
- We send everyone else except themselves
socket.broadcast.emit()

