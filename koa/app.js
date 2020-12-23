const Koa = require('koa')
//创建一个koa对象，表示web app 本身
const app = new Koa()
const router = require('koa-router')();
const bodyParser = require('koa-bodyparser');
//先导入fs模块，然后用readdirSync列出文件
//这里可以用async是因为启动时只运行一次，不存在性能问题

const fs = require('fs');
const controller = require( './controllers.js');

// let files = fs.readdirSync(__dirname + '/controllers');
//
// let js_files = files.filter((f) => {
//     return f.endsWith('.js')
// })


//处理每个js文件
// for(let f of js_files) {
//     console.log(` js文件${f}`)
//     //导入js文件
//     let mapping = require(__dirname +'/controllers/' + f)
//     for(let url in mapping) {
//             console.log(`url,${url}`)
//         if(url.startsWith('GET')){
//             let path = url.substring(4)
//             router.get(path,mapping[url])
//             console.log(`get,${path}`)
//         }else if(url.startsWith('POST')){
//             let path = url.substring(5)
//             router.post(path,mapping[url])
//             console.log(`post,${path}`)
//         }else{
//             console.log(`无效的url,${url}`)
//         }
//     }
// }

app.use(bodyParser())
app.use(router.routes())
// 使用middleware:
app.use(controller());


/*

function addMapping(router,mapping) {
    for (url in mapping) {
        console.log(url)
        if(url.startsWith('GET')){
            let path = url.substring(4)
            router.get(path,mapping[url])
        }else if(url.startsWith('POST')){
            let path = url.substring(5)
            router.post(path,mapping[url])
        }else{
            console.log(`${url}`)
        }
    }
}

function addControllers(router){
    let files = fs.readdirSync(__dirname + '/controllers');
    let js_files = files.filter((f) => {
        return f.endsWith('.js')
    })
    for(f of js_files) {
        let mapping = require(__dirname + '/controllers/' + f)
        addMapping(router,mapping)
    }
}
addControllers(router)
*/








app.listen(8081)
console.log("http://127.0.0.1:8081")
