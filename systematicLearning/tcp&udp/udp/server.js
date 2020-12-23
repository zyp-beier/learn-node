const dgram = require('dgram')
const server = dgram.createSocket('udp4')

server.on('message',function (msg,rinfo) {
    console.log('已接受到客户端发送的数据' + msg)
    console.log('客户端地址信息为%j',rinfo)
    const buf = new Buffer('确认信息：' + msg)
    server.send(buf,0,buf.length,rinfo.port,rinfo.address)
})

server.on('listening',function () {
    let address = server.address()
    console.log('服务器开始监听，地址信息为%j',address)
})

server.bind(41234,'localhost')
