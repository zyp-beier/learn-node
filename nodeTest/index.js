// var http = require("http")


// http.createServer(function(require,response) {
//     response.writeHead(200, { 'Content-Type': 'text/plain'});
//     console.log(123)
//     response.end('hello World')
// }).listen(8888)

var s = 'hello'

function greet(name) {
    console.log(s + name + '!');
// process.nextTick()将在下一轮事件循环中调用:
    process.nextTick(function () {
        console.log('nextTick callback!');
    });
    console.log('nextTick was set!');

    if (typeof(window) === 'undefined') {
        console.log('node.js');
    } else {
        console.log('browser');
    }
    process.on('exit', function (code) {
        console.log('about to exit with code: ' + code);
    });
}

module.exports = greet;
