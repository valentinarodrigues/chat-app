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
let count = 0
io.on('connection', (socket)=>{
    console.log('Here is io ')
    socket.emit('sendCount', count)
    socket.on('changeCount', ()=>{
        count++
        console.log(count)
        socket.emit('countUpdated', count)
    })

})
server.listen(port, ()=>{
    console.log('Server is up at port ', port)
})