const mongo = require('mongodb')


//与数据库之间建立连接及关闭数据库的代码示例
let host = '121.43.160.6';
// let port = mongo.Connection.DEFAULT_PORT
let port = 3306
const server = new mongo.Server(host,port,{auto_reconnect:true})
const db = new mongo.Db('node-mongo-examples',server, {safe: true})

db.open(function (err,db) {
    if(err) throw err;
    else{
        console.log('成功建立数据库连接')
        db.close()
    }
});

db.on('close',function (err) {
    if(err) throw err
    else{
        console.log('成功关闭数据库')
    }
});
