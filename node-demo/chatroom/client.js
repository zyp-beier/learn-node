const net = require('net')
const config = require('./config.js')
const client = net.createConnection({
  port: config.port,
  host: config.host
})


// 用户注册成功后为该属性赋值
let username

client.on('connect',function() {
  console.log('请输入用户名');
  process.stdin.on('data',(data) => {
    data = data.toString().trim()
    if(!username){
      let send = {
        protocal: 'signup',
        username: data
      }
      client.write(JSON.stringify(send))
      return
    }
    // 判断是广播消息还是点对点
    let regex = /(.{1,18}):(.+)/
    let matches = regex.exec(data)
    if(matches) {
      let from = username
      let to = matches[1]
      let message = matches[2]
      let send = {
        protocal: 'p2p',
        from,
        to,
        message,
      }
      client.write(JSON.stringify(send))
    } else {
      let send = {
        protocal: 'broadcast',
        from: username,
        message: data,
      }
      client.write(JSON.stringify(send))
    }
  })
})


client.on('data',function(data) {
  data = JSON.parse(data)
  switch(data.protocal) {
    case 'signup':
      let code = data.code
      switch(code) {
        case 1000:
          username = data.username
          console.log(data.message);
          break;
        case 1001:
          console.log(data.message);
          break;
        default:
          break;
      }
      break;
    case 'broadcast':
      console.log(data.message);
      break;
    case 'p2p':
      let code2 = data.code
      switch(code2) {
        case 2000:
          let {from, message} = data
          message = `${from}对你说:${message}`
          console.log(message);
          break;
        case 2001:
          console.log(data.message);
          break;
        default: 
          break
      }
      break
    default:
      break
  }
})