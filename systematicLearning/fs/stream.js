const fs = require('fs')
const file = fs.createReadStream('./message',{start:3,end:12})
const out = fs.createWriteStream('./anotherMessage')

// 使用ReadStream对象读取文件
/*file.on('open',function (fd) {
    console.log('开始读取文件')
})

// console.time('aa')
file.pause()

file.on('data',function (data) {
    console.log('读取到数据')
    console.log(data.toString())
})

setTimeout(function () {
    file.resume()
},1000)
// console.timeEnd('aa')

file.on('end',function () {
    console.log('文件已全部读取完毕')
})

file.on('close',function () {
    console.log('文件被关闭')
})

file.on('error',function () {
    console.log('文件读取失败')
})*/

// 使用createWriteStream方法写入文件
/*file.on('data',function (data) {
        out.write(data,function () {
            console.log(data.toString())
        })
    })
out.on('open',function (fd) {
    console.log('需要被写入的文件已被打开')
})

file.on('end',function () {
    out.end('再见',function () {
        console.log('文件全部写入完毕')
        console.log(`共写入${out.bytesWritten}字节数据`)
    })
})*/

//观察WriteStream对象的write方法的返回结果
//   000
//
//   并监听drain事件
/*for(let i = 1; i<=5000; i++){
    let flag = out.write(i.toString())
    console.log(flag)
}
out.on('drain',function () {
    console.log('操作系统缓存区的数据已全部输出')
    let out2 = fs.createWriteStream('./message')
    for(let j=1;j<=5000;j++){
        let flag2 = out2.write(j.toString())
        console.log(flag2)
    }
    out2.on('drain',function () {
        console.log('操作系统缓存区的数据已全部输出')
    })
})*/


/*fs.writeFile('anotherMessage','211',function () {})
fs.writeFile('message','211',function () {})*/

let RMP3 = fs.createReadStream('./heymom.mp4')
let WMP3 = fs.createWriteStream('./heymom2.mp4')
// 监听drain事件
/*
RMP3.on('data',function (data) {
    let MP3 = WMP3.write(data)
    console.log(MP3)
})

WMP3.on('drain',function () {
    console.log('操作 系统缓存区的数据已全部输出')
})
*/

//使用pipe方法复制文件&&将end属性值设置为false以在目标文件中追加数据
/*
RMP3.pipe(WMP3,{end:false})
RMP3.on('end',function () {
        WMP3.end('再见')
})
*/

// 使用unpipe方法取消目标文件的写入操作
/*RMP3.pipe(WMP3,{end:false})
setTimeout(function () {
        RMP3.unpipe(WMP3)
},10)*/
