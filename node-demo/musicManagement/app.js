const http = require('http')
const config = require('./config')
const router = require('./router')
const render = require('./common/render')

const app = http.createServer()

app.on('request',function(req,res) {
  render(res)
  router(req,res)
})

app.listen(config.port,config.host,function(err) {
  if(err){
    console.log(err);
    return
  }
  console.log('http://' + config.host + ':' + config.port);
})