const fs = require('fs')
//异步读取文件
// fs.readFile('./text','utf8',function (err,data) {
//             if(err) {
//                 console.log('err' + err)
//                 return
//             }
//     console.log(data)
// })
//同步读取文件
// try{
//     let data = fs.readFileSync('./text','utf8')
//     console.log(data)
// }catch (e) {
//     console.log(e)
// }

//异步写文件
// let string = '这是通过fs.writeFile写入文字'
// fs.writeFile('./text',string,function (err) {
//     if(err){
//         console.log(err)
//         return
//     }
//     console.log('写入成功')
//     fs.readFile('./text','utf8',function (err,data) {
//             if(err) {
//                 console.log('err' + err)
//                 return
//             }
//     console.log(data)
// })
// })
//同步写文件
/*let string2 = '这是通过fs.writeFile同步写入文字4'

// try{
    fs.readFile('./text','utf8',function (err,data) {
        if(err) {
            console.log('err' + err)
            return
        }
        console.log(data + 1)
    })
    fs.writeFileSync('./text',string2)
    fs.readFile('./text','utf8',function (err,data) {
    if(err) {
        console.log('err' + err)
        return
    }
    console.log(data + 2)
})*/
/*}catch (e) {
    console.log(e)
}*/


/*fs.open('./message','r',function (err,fd) {
    if(err) {
        console.log(err)
        return
    }
    let buf = new Buffer(255)
    fs.read(fd,buf,0,9,3,function (err,bytesRead,buffer) {
        console.log(buffer.slice(0,bytesRead).toString())
        fs.read(fd,buf,0,3,null,function (err,bytesRead,buffer) {
            console.log(buffer.slice(0,bytesRead).toString())
        })
    })
})*/
/*fs.open('./message','r',function (err,fd) {
    let buf = new Buffer(255)
    let bytesRead = fs.readSync(fd,buf,0,9,3)
    console.log(bytesRead)
    console.log(buf.slice(0,bytesRead).toString())

})*/

/*fs.open('./message','a',function (err,fd) {
    let buf = new Buffer('新写入的数据')
    fs.write(fd,buf,3,9,0,function (err,written,buffer) {
        fs.write(fd,buf,12,6,null,function (err,written,buffer) {
            if(err) console.log('写入文件失败')
            console.log('写入文件成功')
        })
    })

})*/

fs.open('./aa','wx',function(err,fd) {
    console.log(fd)
    let buf = new Buffer('我喜爱编程')
    fs.write(fd,buf,0,15,0,function(err,written,buffer) {
        if(err) console.log('写入文件失败')
        console.log('写入文件成功')
        fs.fsync(fd)
        fs.close(fd)
    })
})

