const sayHi = require('./sayHi.js')  // 第一次加载会缓存模块再次加载将从缓存中读取所有缓存模块保存在require.cache中
// delete require.cache['./sayHi.js']
require('./sayHi.js')
require('./sayHi.js')
require('./sayHi.js')
require('./sayHi.js')
require('./sayHi.js') 
// const global = require('./global.js')
// console.log(__dirname) //E:\study\learn-node\node-demo
sayHi.sayHi('hi')
console.log(sayHi);
// console.log(a); //global.a

const os = require('os')
// console.log(os);


// console.log(require.cache);