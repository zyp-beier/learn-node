const fs = require('fs')

//移动文件或目录
/*
let files = fs.rename('./message','./test',function (err) {
    if(err) console.log(err)
    console.log('文件移动成功')
})
*/

// 使用link方法创建与删除文件的硬链接
/*fs.link('./message','./test/test',function (err) {
    if(err) console.log(err)
    console.log('创建硬链接操作成功')
})*/

//使用unlink方法删除硬链接
/*fs.unlink('./message',function (err) {
    if(err) console.log(err)
    console.log('删除硬链接操作成功')
})*/

//使用truncate方法截断文件
/*fs.truncate('./message',10,function (err) {
    if(err) console.log(err)
    fs.stat('./message',function (err,stats) {
        console.log(stats.size)
    })
})*/

//打开文件阶段文件查询文件
/*fs.open('./message','w',function (err,fd) {
        fs.ftruncate(fd,10,function (err) {
            if(err) console.log(err)
            fs.fstat(fd,function (err,stats) {
                console.log(stats.size)
            })
        })
})*/

//使用rmdir方法删除空目录
/*fs.rmdir('./dd',function (err) {
    console.log('空目录删除成功')
})*/

//使用watchFile方法监视文件
/*let fun1 = fs.watchFile('./message',function (curr,prev) {
    if(Date.parse(prev.ctime==0)){
        console.log('message文件被创建')
    }else if(Date.parse(curr.ctime==0)){
        console.log('message文件被删除')
    }else if(Date.parse(prev.mtime)!=Date.parse(curr.mtime)){
        console.log('message文件内容被修改')
    }
})

let fun2 = fs.watchFile('./message',function (curr,prev) {
    if(Date.parse(prev.mtime)!=Date.parse(curr.mtime)){
        console.log('message文件的尺寸为' + curr.size + '字节')
    }
})
fs.watchFile('./message',fun1)
fs.watchFile('./message',fun2)

fs.unwatchFile('./message',fun2)*/

//使用watch方法监视文件
/*let watcher = fs.watch('./message',function (event,filename){
    console.log(event)
    console.log(filename)
    watcher.close()
    })
let watcher = fs.watch('./message')
watcher.on('change',function (event,filename) {
    console.log(event)
    console.log(filename)
})*/
