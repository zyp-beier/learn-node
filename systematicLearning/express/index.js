const express = require('express')
const http = require('http')
const app = express()
/*
app.get('/index.html',function (req,res) {
    // 为http.ServerResponse对象提供一个send方法，
    // 该方法用于发送一个服务器端响应结果。在使用该方法时，
    // 不需要使用http.ServerResponse对象的writeHead方法或setHeader方法来发送响应头信息，
    // send方法将根据服务器端响应结果自动计算响应头信息。
    // 在使用send方法时，
    // 也不需要使用http.ServerResponse对象的end方法来显式结束响应内容的发送，
    // 该方法已被封装在send方法内部。
    res.send('hello,express')
})*/

// 在路由中使用参数
/*app.get('/index.html/:id/:name',function (req,res) {
    let str=''
    for(key in req.params){
        if(str!=''){
            str+='<br>'
        }
        str+='参数名'+ key
        str+=String.fromCharCode(9) + '参数值' + req.params[key]
    }
    console.log(str)
    res.send(str)
})*/

//在路由中使用正则表达式
/*app.get('/i*.html/:id?/:name?',function (req,res) {
    let str = ''
    if(req.params.id) {
        str += 'id参数值:' + req.params.id
    }
    if(str !== ''){
        str+= '<br>'
    }
    if(req.params.name) {
        str += 'name参数值:' + req.params.name;
    }
    res.send(str)
})*/

//在路由中使用正则表达式
/*app.get('/a*!/!*!/b*!/d.html/:id?/:name?',function (req,res) {
    let str = ''
    if(req.params.id) {
        str += 'id参数值:' + req.params.id
    }
    if(str !== ''){
        str+= '<br>'
    }
    if(req.params.name) {
        str += 'name参数值:' + req.params.name;
    }
    res.send(str)
})*/

//next方法的使用示例
app.get('/index.html/:id(\\d+)',function (req,res,next) {
    if(req.params.id>10){
        next()
    }else{
        res.send('id参数值必须大于10')
    }
})

app.get('/index.html/:id(\\d+)',function (req,res) {
    res.send('你好')

})

app.listen(8080,'127.0.0.1');
