const http = require('http')

let options = {
    hostname: 'localhost',
    port: 8081,
    path: '/',
    method: 'POST'
};

// 使用request方法向其他网站请求数据
/*const req = http.request(options,function (res) {
    // console.log('状态码' + res.statusCode)
    // console.log('响应头' + JSON.stringify(res.headers))
    res.setEncoding('utf8')
    res.on('data',function (data) {
        console.log('响应内容',data)
    })
})
*/

//使用get方法向其他网站请求数据
/*const req = http.get(options,function (res) {
    console.log('状态码' + res.statusCode)
    console.log('响应头' + JSON.stringify(res.headers))
    res.setEncoding('utf8')
    res.on('data',function (data) {
        console.log('响应内容',data)
    })
})
*/

//向本地服务器请求数据
const req = http.request(options,function (res) {
    res.on('data',function (data) {
        console.log('客户端接收到数据',data.toString())
    })
})
req.write('nihao')
req.end('zaijian')

/*
const req = http.request(options,function (res) {
    console.log('状态码' + res.statusCode)
    console.log('响应头' + JSON.stringify(res.headers))
})
//在建立连接的过程中，当为该连接分配端口时，触发http.ClientRequest对象的socket事件，
req.on('socket',function (socket) {
    //setTimeout方法指定该socket端口对象的超时时间为1秒,socket超时时使用http.ClientRequest对象的abort方法终止本次请求。
    socket.setTimeout(1000,function () {
            req.abort()
    })
})
//由于在socket超时时终止本次请求将触发错误代码为ECONNRESET的错误
req.on('error',function (err) {
    if(err.code==='ECONNRESET'){
        console.log('socket端口超时')
        return
    }
    console.log('其他错误')
})*/
