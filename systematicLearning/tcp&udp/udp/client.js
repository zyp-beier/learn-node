const dgram = require('dgram')
let message = new Buffer('你好')
const client = dgram.createSocket('udp4')

client.send(message,0,message.length,41234,'localhost',function (err,bytes) {
    if(err) console.log('数据发送失败')
    console.log('已发送%d字节数据',bytes)
})

