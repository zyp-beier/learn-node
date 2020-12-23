var express = require('express');
var app = express();
let birds = require('./birds')
let pug = require('./pug')
// let fs = require('fs')
// app.engine('ntl',function (filePath,options,callback) {
//     fs.readFile(filePath,function (err,content) {
//         if(err)  return callback(new Error(err))
//         let rendered = content.toString().replace('#title','' +options.title+'')
//             .replace('#message','' + options.message + '')
//         return callback(null,rendered)
//     })
// })
//
// app.set('views','./views')
// app.set('views engine','ntl')





app.use(function (err,req,res,next) {
    console.log(err.stack)
    res.status(500).send('错误中间件')
    next()
})

var MyLogger = function(req,res,next){
    console.log("LOGGER")
    next()
}

var requestTime = function(req,res,next){
    req.requestTime = Date.now()
    next()
}
app.use(requestTime)
app.use(MyLogger)
//
// var options = {
//     dotfiles: 'ignore',
//     etag: false,
//     extensions: ['htm', 'html'],
//     index: false,
//     maxAge: '1d',
//     redirect: false,
//     setHeaders: function (res,path,stat) {
//         res.set('x-timestamp', Date.now());
//     }
// }
//
// app.use(express.static(__dirname + '/static',options))



app.use('/pug',pug)

app.use('/file',express.static(__dirname + '/static/html/index.html'))
app.use('/birds',birds)

app.all('/secret',[fn1,fn2,fn3])

function fn1(req,res,next) {
    console.log(123)
    next()
}

function fn2(req,res,next){
    console.log(258)
    next()
}

function fn3 (req,res,next){
    console.log(369)
    res.send('aaa')
}

app.get('/', function (req, res) {
    res.send('123')
    // res.render('index',{title: 'hey',message: 'there'})
});

app.get('/ab?cd',function (req,res) {
    res.send('ab?cd')
})

app.get('/ab+dd',function (req,res) {
    res.send('ab+dd')
})

app.get('/ab*cc',function (req,res) {
    res.send('/ab中间加任何东西cc')
})

app.get('/ab(cd)ee',function (req,res) {
    res.send('ab(cd)ee')
})

app.get('/a+b?c*(hh)ff',function (req,res) {
    res.send('混合组合')
})

app.post('/',function (req,res) {
    res.send('app.post/')
});

app.put('/user',function (req,res) {
    res.send('put./user')
});

app.delete('/user',function (req,res) {
    res.send('delete./user')
});

app.get('/user',function (req,res) {
    res.send('app.get/user')
});

app.set('view engine','pug')


app.listen(8084,function () {
    console.log('服务已开启')
});


