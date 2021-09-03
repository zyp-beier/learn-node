const https = require('https')

let ops = {
    hostname: 'npmjs.org',
    port: 443,
    path: '/',
    method: 'GET',
    agent: false
}

/*const req = https.request(ops,function (res) {
    console.log('状态码',res.statusCode)
    console.log('响应头',JSON.stringify(res.headers))
    res.setEncoding('utf8')
    res.on('data',function (chunk) {
        console.log('响应内容'+chunk)
    })
})

req.setTimeout(5000,function () {
    req.abort()
})

req.on('socket',function (socket) {
    console.log('socket'+ socket)
})
req.on('error',function (err) {
    console.log(err.code)
    console.log('socket超时了')
})

req.end()*/

//使用get方法向其他网站请求数据
const req = https.get(ops,function (res) {
    console.log('状态码',res.statusCode)
    console.log('响应头',JSON.stringify(res.headers))
    res.setEncoding('utf8')
    res.on('data',function (chunk) {
        console.log('响应内容'+chunk)
    })
})
req.setTimeout(5000,function () {
    req.abort()
})
req.on('error',function (err) {
    if(err.code === 'ECONNRESET') {
        console.log('socket端口超时了')
    }else{
        console.log('在请求数据过程中发生了错误，错误代码为' + err.code)
    }
})
