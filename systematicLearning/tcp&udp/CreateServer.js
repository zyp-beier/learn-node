//createServer方法与listen方法的简单使用示例
const net = require('net')
const file = require('fs').createWriteStream('./message')
const server = net.createServer(function (socket) {
    /*server.getConnections(function (err,count) {
        console.log('当前已有%d个客户链接',count)
        server.maxConnections = 5
    })

    server.close(function () {
        console.log('tcp服务器被关闭')
    })*/
    console.log('客户端与服务器端链接已建立')
})

/*server.listen(8431,'localhost',function () {
    console.log('服务器端开始监听')
})

server.on('error',function (e) {
    if(e.code==='EADDRINUSE'){
        console.log('服务器地址及端口已被占用')
    }
})*/

// data事件的回调函数的使用示例
/*server.on('connection',function (socket) {
    //1
    // socket.setEncoding('utf8')
    socket.on('data',function (data) {
        // console.log(data)
        //2
        console.log(data.toString())
        // console.log('已经接收到%d字节数据',socket.bytesRead)
        socket.pipe(file)
    })
    socket.on('end',function () {
        console.log('客户端链接已关闭')

    })
});*/

//修改以上
/*server.on('connection',function (socket) {
    socket.on('data',function (data) {
        console.log(data.toString())
        socket.pipe(file,{end:false})
        setTimeout(function () {
            file.end('再见')
            socket.unpipe(file)
        },5000)
    })
    socket.on('end',function () {
        console.log('客户端链接已关闭')
    })
});*/

server.on('connection',function (socket) {
   // socket.pause()
   //  setTimeout(function () {
        // socket.resume()
        // socket.pipe(file)
    // },30000)
    socket.on('data',function (data) {
        console.log(data.toString())
        socket.pipe(file)
        // socket.pause()
        // setTimeout(function () {
        //     socket.resume()
        // },30000)

    })
})



//使用address方法查看TCP服务器监听的地址信息
server.listen(8431,function () {
    let address = server.address()
    console.log('被监听的地址信息为%j',address)
})
