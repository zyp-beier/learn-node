const express = require('express')
const middleware = require('./setHeader')
const cookieParser = require('cookie-parser');
const session = require('express-session')
const directory = require('express-directory')
const mysql = require('mysql')
const pool = mysql.createPool({
    host: '121.43.160.6',
    port: 3306,
    database: 'zhao_study',
    user: 'zyp',
    password: '123456789',
})

const app = express();
//调用自定义中间件
/*
app.use(middleware.setHeader());

app.get('/',function (req,res) {
    res.writeHead(res.statusCode,res.header)
    res.write(res.head)
    res.end('你好啊')
})
*/

// use方法中的path参数使用示例
/*app.use('/static',middleware.setHeader())

app.get('/!*',function (req,res) {
    if(res.head){
        res.writeHead(res.statusCode,res.header)
        res.write(res.head)
        res.write('你好吗')
    }
    res.end()
})*/

// 在应用程序实例对象的get方法中使用自定义中间件函数
/*app.get('/',middleware.setHeader(),function (req,res) {
    res.writeHead(res.statusCode,res.header)
    res.write(res.head)
    res.end('how are you?')
})*/

//Express框架中内置的中间件
// basicAuth中间件的使用示例
/*app.use(express.basicAuth('testUser','testPass'))
app.get('/',function (req,res) {
    res.send('登录成功')
})*/

// bodyParser中间件的使用示例
/*app.use(express.bodyParser())
app.get('/file.html',function (req,res) {
    res.sendFile(__dirname+'/file.html')
});
app.post('/file.html',function (req,res) {
    const file = req.files.myfile
    console.log(file)
    fs.readFile(file.path,function (err,data) {
        if(err) res.send('读取文件操作失败')
        else{
            fs.writeFile(file.name,data,function (err) {
                if(err) res.send('写文件操作失败')
                else res.send('文件上传成功')
            })
        }
    })
})*/

// cookieParser中间件的使用示例
/*app.use(cookieParser());
app.get('/cookie.html',function (req,res) {
    res.sendFile(__dirname+'/cookie.html')
})
app.post('/cookie.html',function (req,res) {
    for(let key in req.cookies){
        res.write('cookie名'+key)
        res.write('cookie值'+ req.cookies[key])
    }
res.end()
})*/

// session中间件的使用示例
/*
app.use(cookieParser())
app.use(session({secret: 'test'}))
app.get('/session.html',function (req,res) {
    res.sendFile(__dirname+'/session.html')
    req.session.name = 'zhaoyinping'
    req.session.password = 'zyp'
})
app.post('/session.html',function (req,res) {
    console.log(req.session)
    res.end()
})
*/

//static中间件的使用示例
/*
app.use(express.static(__dirname))
app.post('/',function (req,res) {
    req.on('data',function (data) {
        const obj = JSON.parse(data.toString())
        pool.getConnection(function (err,connection) {
            if(err) console.log('数据库连接失败' + err)
            else{
                let str
                connection.query('insert into user set?',{name: obj.name,age:obj.age},function (err,result) {
                    if(err) {
                        console.log('在数据库中插入数据失败')
                        str = '在数据库中插入数据失败'
                    } else{
                        console.log('在数据库中插入数据成功')
                        str = '在数据库中插入数据成功'
                    }
                    connection.release()
                    res.send(str)
                })
            }

        })

    })

})
*/

//directory中间件的使用示例
app.use(directory(__dirname))

app.listen(8081,'127.0.0.1')
