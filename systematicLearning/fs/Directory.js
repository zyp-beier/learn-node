const fs = require('fs')

//创建目录
/*
fs.mkdir('./bb',function (err) {
    if(err) console.log(err)
    console.log('创建成功')
})
*/

//读取根目录下所有的文件
/*fs.readdir('./',function (err,files) {
    if(err) console.log(err)
    console.log(files)
})*/

//使用stat方法查看文件信息
/*fs.stat('./message',function (err,stats) {
    if(err) console.log(err)
    console.log(stats)
})*/

//打开文件查询文件信息
/*fs.open('./message','r',function (err,fd) {
    if(err) console.log(err)
    fs.fstat(fd,function (err,stats) {
        if(err) console.log(err)
        console.log(stats)
    })

})*/

//使用exists方法检查文件是否存在
/*fs.exists('./message',function (exists) {
    if(exists){
        console.log('该文件存在')
    }else{
        console.log('该文件不存在')
    }
})*/

//使用realpath方法获取文件的绝对路径
/*fs.realpath('./message',function (err,resolvedPath) {
    console.log(resolvedPath)
})*/

//使用utimes方法修改文件的访问时间及修改时间
/*fs.utimes('./message',new Date(),new Date(),function (err) {
    console.log("修改成功")
    fs.stat('./message',function (err,stats) {
        if (err) console.log(err)
        console.log(stats)
    })
})*/

//打开文件修改文件的访问时间及修改时间
/*fs.open('message','r',function (err,fd) {
    fs.futimes(fd,new Date(),new Date(),function (err) {
        if(err) console.log(err)
            fs.fstat(fd,function (err,stats) {
                console.log(stats)
            })
    })
})*/
