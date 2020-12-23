/*
console.log('%s','home','home')
console.log('%s','home',{name: 'zhaoyinping',age: 18})
console.log('%d', 10, 10.5)
console.log('%d', 'home')
console.log('%%',123)
*/


/*
console.time('使用同一个参数')
let user = {}
user.name = 'zhaoyinping'
user.getName = function () {
return this.name
}
user.setName = function (name) {
    this.name = name
}

console.dir(user)
console.log(user)
console.trace(user)
console.timeEnd('使用同一个参数')
*/
function user(name) {
    user = {
        name,
        age: 18
    }
    console.log(user)
}

exports.getUser = user


const http = require('http')
const server = http.createServer()

/*server.on('request',function (req,res) {
    if(req.url!=='/favicon.icon'){
        console.log('接收到客户端请求')
    }

})

server.on('request',function (req,res) {
    if(req.url!=='/favicon.icon'){
        console.log(req.url)
        res.end('hello')
    }

})*/
/*//自定义事件
server.on('aa',function (arg1,arg2,arg3) {
    console.log('自定义事件被触发')
    console.log(arg1)
    console.log(arg2)
    console.log(arg3)
})

server.emit('aa','自定义参数1','自定义参数2','自定义参数3')*/

/*console.log(server.listeners('request'))//返回由该事件的所有事件处理函数构成的数组。*/

server.on('removeListener',function (e,f) {
    console.log(`对${e}事件取消事件处理函数`)
    console.log(f)
})
server.on('newListener',function (e,f) {
    console.log(`对${e}事件添加事件处理函数`)
    console.log(f)
})

const testFunction = function(req,res){
    if(req.url!=='/favicon.ico') console.log('发送响应完毕')
}

server.on('request',function (req,res) {
    if(req.url!=='/favicon.ico') console.log('接收到客户端响应请求')
})

server.on('request',function (req,res) {
    if(req.url!=='/favicon.ico'){
        console.log(req.url)
        res.end()
    }
})
server.on('request',testFunction)
server.removeListener('request',testFunction)

server.listen(8081)
