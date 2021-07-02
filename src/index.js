const path = require('path')
const http = require('http')
const express = require('express')
const socketio = require('socket.io')

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

    socket.emit('sendWelcome', message)

    socket.on('sendData', (receivedData) => {
        io.emit('sendAllClients', receivedData)
    })
})

server.listen(port, () => {
    console.log('Server is up at port ', port)
})