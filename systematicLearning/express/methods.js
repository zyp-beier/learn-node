const express = require('express')
const fs = require('fs')
const queryString = require('querystring')
const mysql = require('mysql')
const pool = mysql.createPool({
    host: '121.43.160.6',
    port: 3306,
    database: 'zhao_study',
    user: 'zyp',
    password: '123456789',
})
const app = express()


app.get('/index.html',function (req,res) {
    /*res.writeHead(200,{'Content-type': 'text/html'});
    res.write('<head><meta charset="utf-8"><title>使用post方法向服务器端提供数据</title></head>')
    const file = fs.createReadStream('./index.html')
    file.pipe(res)*/
    // res.sendFile('/projects/training/Learning/node/systematicLearning/index.html')
    // res.sendFile(__dirname + '/put.html')
    res.sendFile(__dirname + '/delete.html')
});

// 使用post方法接收客户端提交的POST请求
/*app.post('/index.html',function (req,res) {
    req.on('data',function (data) {
        let obj = queryString.parse(data.toString())
        pool.getConnection(function (err,connection) {
            if(err){
                res.send('与MySQL建立连接失败')
            }else{
                let str;
                connection.query('insert into user set ?',{name:obj.name,age:obj.age},function (err,result) {
                    if(err){
                        str='在服务器端mysql中插入数据失败'
                    }else{
                        str='在服务器端mysql中插入成功'
                    }
                    connection.release();
                    res.send(str)
                })
            }
        })

    })

})*/

//使用put方法接收客户端提交的PUT请求
/*
app.put('/index.html',function (req,res) {
    req.on('data',function (data) {
        console.log(data)
        let obj = JSON.parse(data.toString())
        pool.getConnection(function (err,connection) {
            if(err){
                res.send('与mysql建立连接失败')
            }else{
                let str;
                connection.query('insert into user set?',{name: obj.name,age: obj.age},function (err,result) {
                    if(err){
                        str='数据库插入数据失败'
                    }else{
                        str='数据库插入数据成功'
                    }
                    connection.release();
                    res.send(str)
                })
            }

        })

    })

})
*/

//使用delete方法接收客户端提交的DELETE请求
/*app.delete('/index.html',function (req,res) {
    req.on('data',function (data) {
        let obj = JSON.parse(data.toString())
        pool.getConnection(function (err,connection) {
            if(err) {
                res.send('与mysql数据库建立连接失败')
            }else{
                let str;
                connection.query('delete from user where name=? and age=?',[obj.name,obj.age],function (err,result) {
                    if (err) {
                        str = '数据删除失败'
                        console.log('数据删除失败')
                    }else {
                        str='在服务端mysql数据库中删除成功'
                        connection.release()
                        res.send(str)
                        console.log(str)
                    }

                })
            }

        })

    })

})*/

//使用all方法接收客户端提交的各种请求
/*
app.all('/index.html/:id(\\d+)',function (req,res,next) {
    pool.getConnection(function (err,connection) {
        if(err) {
            res.send('与数据库连接失败')
        }else{
            connection.query('select count(1) count from user where id=?',[req.params.id,],function (err,result) {
                if(err){
                    res.send('数据查询失败')
                    connection.release()
                }else{
                    connection.release()
                    if(result[0].count>0){
                        next()
                    }else {
                        res.send('失败')
                    }
                }

            })
        }
    })
})
*/

/*app.get('/index.html/:id(\\d+)',function (req,res) {
    res.sendFile(__dirname + '/delete.html')
})

app.post('/index.html/:id(\\d+)',function (req,res) {
    req.on('data',function (data) {
        let obj = JSON.parse(data.toString())
        pool.getConnection(function (err,connection) {
            if(err){
                res.send('与mysql数据库连接失败')
            }else{
                let str;
                connection.query(update user )
            }

        })

    })

})*/




app.listen(8080,function () {
    console.log('监听8080端口')
})
