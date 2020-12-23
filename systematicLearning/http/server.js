const http = require('http')
const fs = require('fs')
const url = require('url')

const server = http.createServer(function (req,res) {
    if(req.url !== '/favicon.ico'){
        //在文件中保存客户端请求信息
       /* let message = fs.createWriteStream('./message')
        message.write('客户端请求所用方法为' + req.method)
        message.write('客户端请求所用url字符串为' + req.url)
        message.write('客户端请求头' + JSON.stringify(req.headers))
        message.end('客户端请求所用http版本为' + JSON.stringify(req.httpVersion))*/

        //获取客户端请求信息
        req.on('data',function (data) {
            console.log(decodeURIComponent(data))
        })
        req.on('end',function () {
            console.log('接收完毕')
        })
        res.write('woshifuwuduan')
        res.end()

        ///////////////发送服务器端响应流/////////////////////////////////////////////////////////
        //setHeader方法的使用示例
        /*res.setHeader('Content-Type','text/plain')
        res.setHeader('Access-Control-Allow-Origin','*')
        //等同于
        res.writeHead(200,{'Content-Type':'text/plain','Access-Control-Allow-Origin':'*'})

        //使用getHeader方法获取响应头信息
        console.log(res.getHeader('Access-Control-Allow-Origin'))
        //使用statusCode属性与sendDate属性设置状态码及是否发送Date响应字段
        res.statusCode = 404;
        res.sendDate = false*/

        //使用write方法发送响应内容,end方法来结束响应内容的书写,在每次发送响应数据时，必须调用end方法来结束响应
        /*res.write('<html><head><meta charset="UTF-8"></head></html>')
        res.write('服务端发送的数据2')
        fs.readFile('heymom.mp4',function (err,data) {
            if(err){
                console.log(err)
                return
            }
            console.log( res.write(data))
        })
        //使用http.ServerResponse对象的end方法来结束响应内容的书写,在每次发送响应数据时，必须调用该方法来结束响应
        res.end()*/

        //设置响应超时时间
        // res.setTimeout(1000)
        //当响应超时时将自动关闭与HTTP客户端连接的socket端口
        // 如果在setTimeout方法中使用callback指定当响应超时时调用的回调函数
        // 当响应超时时不自动关闭与HTTP客户端连接的socket端口。
         // res.on('timeout',function () {console.log('响应超时')})
    }
    //示例
    /*let q_url = url.parse(req.url)
    console.log(q_url,q_url.pathname)
    switch (q_url.pathname) {
        case '/':

        case '/index.html':
            res.write('<body>您当前正在访问网站首页</body>')
            break
        case '/user.html':
            res.write('<body>您当前正在访问网站用户页</body>')
            break
        default:
            res.write(`<body>您当前正在访问网站的${q_url.pathname}页</body>`)
    }*/
})
//监听事件
/*
server.on('listening',function () {
    console.log('服务器端开始监听')
    server.close()
})
*/

//连接事件
/*server.on('connection',function (socket) {
    // console.log(socket)
    console.log('客户端已连接')
})*/

//监听关闭事件
/*server.on('close',function () {
    console.log('服务器已关闭')
})*/

//错误
/*server.on('error',function (err) {
    if(err.code === 'EADDRINUSE'){
        console.log('端口被占用')
    }
})*/

//服务器超时时间
/*server.setTimeout(60*1000,function (socket) {
    console.log('服务器超时')
    server.close()
})*/


//代理服务器制作示例
/*const server = http.createServer(function (sreq,sres) {
    let url_parts = url.parse(sreq.url)
    let opts = {
        host: 'www.amazon.cn',
        port: 80,
        path: url_parts.pathname,
        headers: sreq.headers
    }
    let creq = http.get(opts,function (cres) {
        console.log(cres)
        sres.writeHead(cres.statusCode,cres.headers)
        cres.pipe(sres)
    })
    sreq.pipe(creq)
})*/

server.listen(8081,function () {
    console.log('服务器开始监听')
})
