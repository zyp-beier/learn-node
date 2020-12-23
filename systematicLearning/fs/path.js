const Path = require('path')

//normalize()
/*
let p = '/a/b/c/d/e'
console.log(Path.normalize(p))//\a\b\c\d\e
*/

//join()
/*
let p = '/a/b/c/d/e'

console.log(Path.join(__dirname,p))  //D:\projects\training\node\systematicLearning\fs\a\b\c\d\e
console.log(Path.join(__dirname,'a','/v','/s'))  //D:\projects\training\node\systematicLearning\fs\a\v\s
*/

//resolve()
/*
let myPath = Path.resolve('a','b','c/message.txt')
console.log(myPath)
*/

//relative()该方法用于获取两个路径之间的相对关系
/*
console.log(Path.relative('D:\\projects\\training\\node\\systematicLearning\\fs','D:\\projects\\training\\node\\systematicLearning\\module'))//..\module
console.log(Path.relative('node\\systematicLearning\\fs','node\\systematicLearning\\test'))//..\test
console.log(Path.relative('node\\systematicLearning','node\\systematicLearning\\test'))//test
console.log(Path.relative('node\\systematicLearning\\test','node\\systematicLearning\\fs'))//..\fs
*/

//dirname()该方法用于获取一个路径中的目录名
/*
//指定相对目录路径
console.log(Path.dirname('./node/aa/bb/d/f'))// ./node/aa/bb/d
console.log(Path.dirname('D:\\projects\\training\\node\\systematicLearning'))//D:\projects\training\node
//指定相对文件路径
console.log(Path.dirname('D:\\projects\\training\\node\\systematicLearning\\message.txt'))//D:\projects\training\node\systematicLearning
console.log(Path.dirname('D:\\projects\\training\\node\\systematicLearning\\aa.txt'))//D:\projects\training\node\systematicLearning
//指定绝对目录路径
// console.log(Path.dirname('D:\\projects\\training\\node\\systematicLearning\\fs))
console.log(Path.dirname('D:\\projects\\training\\node\\systematicLearning\\module'))//D:\projects\training\node\systematicLearning
console.log(Path.dirname('D:\\projects\\training\\node\\systematicLearning\\fs'))//D:\projects\training\node\systematicLearning
//指定绝对文件路径
console.log(Path.dirname('D:\\projects\\training\\node\\systematicLearning\\text'))//D:\projects\training\node\systematicLearning
console.log(Path.dirname('D:\\projects\\training\\node\\systematicLearning\\app.js'))//D:\projects\training\node\systematicLearning
*/

//basename()方法用于获取一个路径中的文件名
// console.log(Path.basename('/foo/ad/df/df/sz/index.html'))//index.html

//extname()用于获取一个路径中的扩展名
// console.log(Path.extname('./dd/f/ga/a/index.html'))//.html







