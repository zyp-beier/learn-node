const http = require('http')
const express = require('express')
const sio = require('socket.io')
const app = express()
const server = http.createServer(app)

//广播消息
app.get('/',function (req,res) {
    res.sendfile(__dirname + '/of.html')
})

server.listen(8083,function () {
    console.log('服务已开启')
})
const io = sio.listen(server)
//命名空间的定义示例
let chat = io.of('/chat').on('connection',function (socket) {
    socket.send('欢迎访问chat空间')
    socket.on('message',function (msg) {
        console.log('chat命名空间收到消息:' ,msg)
    })
})
let news = io.of('/news').on('connection',function (socket) {
    socket.emit('send message','欢迎访问news空间')
    socket.on('send message',function (msg) {
        console.log('news命名空间收到消息:' ,msg)
    })
})
