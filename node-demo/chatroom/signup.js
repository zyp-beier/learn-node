exports.signup = function(socket, data, users) {
  // 处理用户注册请求
  let username = data.username
  // 如果用户不存在则将用户名和它的socket地址保存起来
  let send
  if (users[username]){
    users[username] = socket
    send = {
        protocal: 'signup',
        code: 1000,
        username,
        message: '注册成功'
    }
  } else {
    send = {
      protocal: 'signup',
      code: 1001,
      message: '用户名已经被占用，请重新输入用户名'
    }
  }
  socket.write(JSON.stringify(send))
}