const https = require('https')
const fs = require('fs')
const pk = fs.readFileSync('./ss/privateKey.pem')
const pc = fs.readFileSync('./ss/certificate.pem')
let opts = {
    key: pk,
    cert:pc
}

const server = https.createServer(opts,function (req,res) {
    if(req.url!=='/favicon.ico'){
        res.setHeader('Content-Type','text/html')
        res.write('<html><head><meta charset="utf-8"></head></html>')
        res.write('你好')
        res.end()
    }
})

server.listen(443)

server.on('listening',function () {
    console.log('服务器开始监听')
   setTimeout(function () {
       server.close()
   },10000)
})

server.on('close',function () {
    console.log('服务器已关闭')
})
