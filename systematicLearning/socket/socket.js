const http = require('http')
const express = require('express')
const sio = require('socket.io')
const fs = require('fs')
const app = express()
const server = http.createServer(app)

/*
const server = http.createServer(function (req,res) {
    res.writeHead(200,{'Content-Type': 'text/html'})
    res.end( fs.readFileSync('/socket.html'))
    // res.sendFile(__dirname + '/socket.html')
})

server.listen(8082,function () {
    console.log('服务器已开启')
})

const socket = sio.listen(server)
    socket.on('connection',function (socket) {
        console.log('客户端建立连接')
        socket.send('hello')
        socket.on('message',function (msg) {
            console.log('接收到一个消息' + msg)
        })
        socket.on('disconnect',function () {
            console.log('客户端已断开连接')
        })
})
*/

//在Express框架中使用Socket.IO类库
/*
app.get('/',function (req,res) {
    res.sendFile(__dirname+'/index.html')
})

server.listen(8081)
const socket = sio.listen(server)
socket.on('connection',function (socket) {
    socket.emit('news',{hello: '你好'})
    socket.on('event',function (data) {

    })

})
*/

//保存用户数据
app.get('/',function (req,res) {
    res.sendfile(__dirname + '/index.html')
})

server.listen(8082,function () {
    console.log('服务已开启')
})
const socket = sio.listen(server)
socket.on('connection',function (socket) {
    console.log('客户端已连接')
    socket.on('set nickname',function (name) {
        socket.set('nickname',name,function () {
            socket.emit('send nickname',name)
        })
    })
    socket.on('get nickname',function () {
        socket.get('nickname',function (err,name) {
            if(err) socket.emit('err',err,message)
            else {
                socket.emit('send nickname',name)
            }
        })
    })
})
