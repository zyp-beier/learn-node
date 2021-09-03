// 点对点消息
exports.p2p = function (socket, data, users) {
  let {from, to, message} = data
  // 找到要发送给某人的socket地址对象
  let receiver = users[to]
  let send
  // 如果接收人不存在告诉客户端没有该用户
  if (!receiver) {
    send = {
      protocal: 'p2p',
      code: 2001,
      message: '用户名不存在'
    }
  } else {
    send = {
      protocal: 'p2p',
      code: 2001,
      message
    }
  }
  socket.write(new Buffer(JSON.stringify(send)))
}