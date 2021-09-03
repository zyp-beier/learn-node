const net = require('net')
const server = net.createServer()

//该数组用来封装所有客户端的socket
let users = []
server.on('connection',(socket) =>{
  console.log(socket);
  users.push(socket)
  socket.on('data',function(data) {
    data = data.toString().trim()
    users.forEach((client) => {
      if(client !== socket) {
        client.write(client.remotePort + ':' + data)
      }
    })
  })
  // 当客户端异常退出时就会触发该函数
  // 如果不监听客户端异常退出就会导致服务器崩溃 
  socket.on('error',function() {
   console.log('有客户端异常退出了');
  })
})

server.listen(3000,'127.0.0.1',function() {
  console.log('127.0.0.1:3000');
})
