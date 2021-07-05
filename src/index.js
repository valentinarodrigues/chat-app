const path = require('path')
const http = require('http')
const express = require('express')
const socketio = require('socket.io')
const { createWebSocketStream } = require('ws')

const app = express()
// created this becasue it is needed in socketio express does it behind the scenes
const server = http.createServer(app)
const io = socketio(server)
const port = process.env.PORT || 3001

const publicPath = path.join(__dirname, '../public')

app.use(express.static(publicPath))
const message = 'Welcome'
io.on('connection', (socket) => {
    console.log('Client is connected ')

    // socket.emit('sendWelcome', message) // emits to self as well
    // broadcast to all except self
    socket.broadcast.emit('sendWelcome', 'New member has joined')
    socket.on('sendData', (receivedData) => {
        io.emit('sendAllClients', receivedData)
    })
    socket.on('sendLocation', (data)=>{
        console.log(data)
        data.latitude = 18
        data.
        socket.broadcast.emit('sendAllClients', `http://google.com/maps?q=${data.latitude},${data.longitude}`)


    })
    // when a client gets disconnected we just need to write an event listener since the event disconnect is an inbuilt event in socket.io
    socket.on('disconnect', ()=>{
        io.emit('sendWelcome', 'User has left')
    })
})

server.listen(port, () => {
    console.log('Server is up at port ', port)
})