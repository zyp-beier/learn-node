const http = require('http')
const express  = require('express')
const sio = require('socket.io')

const app = express()
const server = http.createServer(app)

app.get('/',function (req,res) {
    console.log(req.path)
    res.sendfile(__dirname + '/index.html')
})

server.listen(8085,function () {
    console.log('服务已开启')
})

const io = sio.listen(server)
const names = []
io.sockets.on('connection',function (socket) {
    socket.on('login',function (name) {
        for(let i = 0;i<names.length;i++){
            if(names[i] === name){
                socket.emit('duplicate')
                return
            }
        }
        names.push(name)
        io.sockets.emit('login',name)
        io.sockets.emit('sendClients',names)
    })
    socket.on('chat',function (data) {
        io.sockets.emit('chat',data)
    })
    socket.on('logout',function (name) {
        for(let i=0;i<names.length;i++){
            if(names[i] === name){
                names.splice(i,1)
                break
            }
        }
        socket.broadcast.emit('logout',name)
        io.sockets.emit('sendClients',names)
    })
})
