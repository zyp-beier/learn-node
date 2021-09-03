const net = require('net')
const config = require('./config')
const signup = require('./signup')
const p2p = require('./p2p')
const broadcast = require('./broadcast')
const server = net.createServer()
let users = {}

server.on('connection', function(socket) {
  socket.on('data', function(data) {
    // 解析客户端发送的数据
    data = JSON.parse(data)
    // 根据客户端发送的数据类型，做对应的操作
    // switch(data.protocal) {
    //   case 'signup':
    //     // 处理用户注册
    //     signup.signup(socket, data, users)
    //     break;
    //     // 处理点对点消息
    //   case 'p2p':
    //     p2p.p2p(socket, data, users)
    //     break;
    //   case 'broadcast':
    //     broadcast.broadcast(data, users)
    //     break;
    //   default:
    //     break
    // }
    let method = {
      signup: signup.signup(socket, data, users),
      p2p:  p2p.p2p(socket, data, users),
      broadcast: broadcast.broadcast(data, users)
    }
    method[data.protocal] && method[data.protocal]
  })
  socket.on('error', function() {
    console.log('有客户端异常退出了');
  })
})

server.listen(config.port,config.host,() => {
  console.log(config.host + ':' + config.port);
})