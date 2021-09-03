const http = require('http')
const express = require('express')
const sio = require('socket.io')
const app = express()
const server = http.createServer(app)

//广播消息
app.get('/',function (req,res) {
    res.sendfile(__dirname + '/sockets.html')
})

server.listen(8082,function () {
    console.log('服务已开启')
})
const io = sio.listen(server)
let names = []
io.sockets.on('connection',function (socket) {
    console.log('客户端已连接')
    socket.emit('login',names)
    socket.on('login',function (name) {
        names.push(name)
        io.sockets.emit('login',names);
    })
})
