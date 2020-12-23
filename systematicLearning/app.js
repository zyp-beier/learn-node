const fs = require('fs')
/*const foo = require('./module/foo')
const home = require('home')
let myFoo = new foo('tom',40)*/

// const readFile = require('./fs/File')
// const Directory = require('./fs/Directory')
// const Other = require('./fs/OtherOperations')
// const Stream = require('./fs/stream')
// const Path = require('./fs/path')
// const mongo = require('./mongodb/index')
// const mysql = require('./mysql/index')
// const express = require('./express/index')
// const methods = require('./express/methods')
// const Middleware = require('./express/Middleware')
// const jade = require('./express/jade')
// const socket = require('./socket/socket')
// const sockets = require('./socket/sockets')
// const of = require('./socket/of')
// const server = require('./chatroom/server')
const crypto = require('./crypto/index')
/*
let myFoo = new foo('tom',40)  //新建模块对象
console.log('获取修改前的私有变量值')
console.log(myFoo.GetAge())  //获取模块对象内的_age私有变量值
console.log('修改私有变量值')
myFoo.SetName('zhaoyinping')//设置模块对象内的_name私有变量值
myFoo.SetAge(18)//设置模块对象内的_age私有变量值
console.log('获取修改后的私有变量值')
console.log(myFoo.GetAge())
console.log('获取修改前的公有变量值')
console.log(myFoo.name)
console.log(myFoo.age)
console.log('修改公有变量值')
myFoo.name = 'lihongming'
myFoo.age = 25
console.log(myFoo.name)
console.log(myFoo.age)


console.log('获取类变量值')
foo.staticName = 'staticName' //设置类变量值
foo.staticFunction()  //调用类方法*/
// home()
// myFoo.ModuleId()
// console.log(module.children)//属性值为一个数组，其中存放了当前模块的所有子模块对象，即当前模块中已加载的所有模块对象。



/*
let data = new Buffer('我喜爱编程')
fs.writeFile('./message',data,function (err) {
if(err) {
    console.log(err)
    return
}
    console.log('message写入我喜爱编程Buffer类')
})

let options = {
    flag: 'a'
}
fs.writeFile('./message','新加的数据',options,function (err) {
        if(err){
            console.log(err)
            return
        }
    console.log('新加了数据')
})
*/

//复制一个文件
// fs.readFile('a.gif','base64',function (err,data) {
//     // console.log(data)
//     fs.writeFile('./b.gif',data.toString(),'base64',function (e) {
//                 if(e){
//                     console.log(e,'失败')
//                     return
//                 }
//         console.log('写入成功')
//         }
//     )
//
// })
///////////////////////////////////////////////////追加数据
// fs.appendFile('./message','这又是追加的数据','utf8',function (err) {
//             if(err) {
//                 console.log(err)
//                 return
//             }
//     console.log('追加成功')
// })



