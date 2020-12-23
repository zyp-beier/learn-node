const Koa = require('koa');
//koa-router返回的是函数
const router = require('koa-router')();
//解析原始request请求，把解析后的参数，绑定到ctx.request.body中。(post请求)
const bodyParser = require('koa-bodyparser');
//创建一个koa对象，表示web app 本身
const app = new Koa()

//log request url
app.use(async (ctx,next) => {
    console.log(ctx.request.method,ctx.request.url)
    await next()
})
/*
router.get('/hello/:name',async (ctx,next) => {
    let name = ctx.params.name
    console.log(name)
    ctx.response.body = `<h1>hello,${name}</h1>`
})
router.get('/',async (ctx,next) => {
    ctx.response.body = 'index'
})*/

router.get('/', async (ctx,next) => {
    ctx.response.body = `
            <h1>index</h1>
            <form action="/login" method="post">
                <p>name: <input type="text" value="koa" name="name"></p>
                <p>password: <input type="text" name="password"></p>
                <p><input type="submit" value="提交"></p>
            </form>
            `
})

router.post('/login',async (ctx,next) => {
    const body = ctx.request.body
    let {name,password} = body;
    console.log(name,password);

    if(name==='koa' && password ==='123'){
        ctx.response.body = `<h1>Welcome, ${name}</h1>`;
        console.log('已登录' + name,password)
    }else{
        ctx.response.body = `
        <h1>login failed</h1>
        <p><a href="/">try again</a></p>
        `;
        console.log('未登录' + name,password)
    }
})






// 必须在router之前被注册到app对象上。
app.use(bodyParser())
//添加router中间件
app.use(router.routes())



app.listen(8081)
console.log("http://127.0.0.1:8081")
