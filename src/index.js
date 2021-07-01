const path = require('path')
const http = require('http')
const express = require('express')


const app = express()
const server = http.createServer(app)

const port = process.env.PORT || 3001

const publicPath = path.join(__dirname, '../public')

app.use(express.static(publicPath))

server.listen(port, ()=>{
    console.log('Server is up at port ', port)
})