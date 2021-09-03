const net = require('net')
const client = net.createConnection({
  port: 3000,
  host: '127.0.0.1'
})
client.on('connect',() => {
  process.stdin.on('data',function(data) {
    data = data.toString().trim()
    client.write(data)
  })
})

client.on('data', function(data) {
  console.log(data.toString());
})