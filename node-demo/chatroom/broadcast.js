exports.broadcast = function(data,users) {
  let { from,message } = data
  message = `${from}说: ${message}`
  let send = {
    protocal: 'broadcast',
    message
  }
  send = new Buffer(JSON.stringify(send))
  for(let username in users) {
    let tmpSocket = users[username]
    tmpSocket.write(send)
  }
}