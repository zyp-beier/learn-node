const mysql = require('mysql')
const fs = require('fs')
const tablename = 'user'

const connection = mysql.createConnection({
    host: '121.43.160.6',
    port: 3306,
    database: 'zhao_study',
    user: 'zyp',
    password: '123456789',
    // 使用multipleStatements属性值同时执行多条语句
    multipleStatements: true
});

const pool = mysql.createPool({
    host: '121.43.160.6',
    port: 3306,
    database: 'zhao_study',
    user: 'zyp',
    password: '123456789'
})

/*//执行数据的基本处理
//可以通过Connection对象的query方法统一执行数据的增加、删除、查询及修改等基本处理
/!*connection.connect(function (err) {
    if(err) console.log('与mysql数据库建立链接失败' + err)
    else{
        console.log('与mysql数据库建立连接成功')
        //关闭数据库
        /!*connection.end(function (err) {
            if(err) console.log('数据库关闭失败' + err)
            else{
                console.log('数据库关闭成功')
            }
        })*!/

        /!*let query = 'SELECT * FROM posts WHERE title=' + connection.escape('hello,mysql')
        console.log(query)*!/
        connection.query('INSERT INTO user SET ?',{name: 'zhaoyinping'},function (err,result) {
            if(err) console.log('插入数据失败',err)
            else{
                console.log(result.insertId)
                connection.query('SELECT*FROM??',['user'],function (err,result) {
                    if(err) console.log('查询数据失败' , err)
                    else{
                        console.log(result)
                        connection.end()
                    }
                })
            }
        })
    }
})*!/


//使用multipleStatements属性值同时执行多条语句
function handleDisconnect() {
    connection.connect(function (err) {
        if(err) console.log('与mysql数据库建立失败')
        else{
            console.log('与mysql数据库连接成功')
            insertData()
        }
    })
}

connection.on('error',function (err) {
    if(err.code === 'PROTOCOL_CONNECTION_LOST'){
        console.log('与mysql数据库之间的连接丢失')
        setTimeout(function () {
            handleDisconnect()
        },5000)
    }else{
        throw err
    }
})

handleDisconnect()

//可以通过Connection对象的query方法统一执行数据的增加、删除、查询及修改等基本处理
//插入数据
function insertData() {
    let sqlStr = '';
    for(let i=5; i<10;i++){
        sqlStr += `INSERT INTO ` + tablename + '(name,age) values('+
            connection.escape("用户名" + i.toString()) + ',' + connection.escape(i) + ');';
        connection.query(sqlStr,function (err,result) {
            if(err) console.log('插入数据失败',err)
            else{
                console.log('数据插入成功')
                updateData()
            }
        })
    }
    //修改数据
    function updateData() {
            connection.query(`update ` + tablename + ' set job = ? where name=?',['这些都是用户名为2的工作','用户名2'],function (err,result) {
                if(err) console.log('更新数据失败',err)
                else{
                    console.log('数据更新成功')
                    deleteData()
                }
            })
    }
    //删除数据
    function deleteData() {
            connection.query(`delete from ` + tablename + ' where name=?',['用户名3'],function (err,result) {
                if(err) console.log('删除数据失败',err)
                else{
                    console.log('数据删除成功')
                    queryData()
                }
            })
    }
    //查询数据
    function queryData() {
        connection.query('SELECT * FROM ' + tablename,function (err,result) {
            if(err) console.log('数据查询失败',err)
            else{
                console.log(result)
                connection.end()
            }
        })
    }
}*/

//////////////////////////////////////////////////////////////////////////////////
/*
connection.connect(function (err) {
    if(err) console.log('与数据库连接失败')
    else{
        console.log('与数据库连接成功')
        connection.query({
            sql:'select genres.id,genres.name,books.id,books.genreid,books.name from genres inner join books on genres.id = books.genreid',
            nestTables: '_'
        },function (err,result) {
            if(err) console.log(err)
            console.log(result)
        })

       /!* connection.query('select genres.id,genres.name,books.id id1,books.genreid,books.name name1 from genres inner join books on genres.id=books.genreid',function (err,result) {
            if(err) console.log('查询数据失败')
            else{
                console.log(result)
                connection.end(0)
            }
        })*!/
    }
})
*/

//以数据流的方式处理查询数据
//Connection对象的query方法返回对象使用示例
/*let message = fs.createWriteStream('./message')
message.on('error',function (err) {
    console.log('写文件操作失败',err)
    process.exit()
})

connection.connect(function (err) {
    if(err) console.log('数据库连接失败',err)
    else{
        console.log('与mysql数据库连接成功')
        const query = connection.query('select * from user')
        query.on('error',function (err) {
            if(err) console.log('读取数据失败',err)
            process.exit()
        })
        .on('fields',function (fields) {
            let str = '';
            console.log('fields',fields);
            fields.forEach((field) => {
                if(str!==''){
                    str += String.fromCharCode(9)
                    str+=field.name
                }
            })
            console.log(String.fromCharCode(9))
            message.write(str)
        })
            .on('result',function (row) {
                connection.pause()
                message.write(row.id + String.fromCharCode(9)+row.name+String.fromCharCode(9) + row.age,function (err) {
                    connection.resume()
                })
            })
            .on('end',function () {
                console.log('数据全部写入完毕')
                connection.end()
            })
    }

});*/


// 创建并使用连接池对
pool.getConnection(function (err,connection) {
    if(err) console.log('与mysql数据库建立连接失败')
    else{
        console.log('与mysql数据库建立连接成功')
        connection.query('select * from user',function (err,rows) {
            if(err) console.log('查询数据操作失败')
            else{
                console.log(rows)
                pool.end()
            }
        })
    }
})
