var fs = require('fs');
// 读取文本文件
// fs.readFile('node.txt','utf-8',function(err,data){
//     if(err) {
//         console.log(err)
//     }else{
//         console.log(data)
//     }
// });
//读取二进制数据
// fs.readFile('2.jpg',function(err,data) {
//     if(err) {
//         console.log(err)
//     }else{
//         console.log(data)
//     }
// })
// 同步读文件
// try{
//     var data = fs.readFileSync('node.txt','utf-8')
//     console.log(data)
// }catch (e) {
//     console.log(e)
// }
//写文件（以前的文本会被替换掉）
// var da = '新写入的文本'
// fs.writeFile('node.txt',da,function (err) {
//     if(err) {
//         console.log(err)
//     }else{
//         console.log('ok')
//     }
// })
// 获取文件详细信息
// fs.stat('node.txt',function(err,stat){
//     if(err) {
//         console.log(err)
//     }else{
//         console.log(stat)
//         // 是否是文件:
//         console.log('isFile: ' + stat.isFile());
//         // 是否是目录:
//         console.log('isDirectory: ' + stat.isDirectory());
//         if (stat.isFile()) {
//             // 文件大小:
//             console.log('size: ' + stat.size);
//             // 创建时间, Date对象:
//             console.log('birth time: ' + stat.birthtime);
//             // 修改时间, Date对象:
//             console.log('modified time: ' + stat.mtime);
//         }
//     }
// })
/*var rs = fs.createReadStream('node.txt','utf-8');

rs.on('data',function (chunk) {
    console.log('DATA')
    console.log(chunk);
})

rs.on('end',function () {
    console.log('end')
})

rs.on('error',function (err) {
    console.log('err' + err)
})*/

/*var wsl = fs.createWriteStream('text')
wsl.write('使用stream写入文本数据');
wsl.write('这是第二波');
wsl.write('这是第三波');
wsl.end()*/
//
// var ws2 = fs.createWriteStream('output2.txt');
// ws2.write(new Buffer('使用Stream写入二进制数据...\n', 'utf-8'));
// ws2.write(new Buffer('END.', 'utf-8'));
// ws2.end();

// pipe
var rs = fs.createReadStream('node.txt');
var ws = fs.createWriteStream('text')

rs.pipe(ws)
