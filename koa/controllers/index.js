/*
const Koa = require('koa')
//创建一个koa对象，表示web app 本身
const app = new Koa()
const bodyParser = require('koa-bodyparser');


app.use(bodyParser())
let fn_index = async (ctx,next) => {
    ctx.response.body = `
            <h1>表单</h1>
            <form action="/login" method="post">
                <p>name: <input type="text" value="koa" name="name"></p>
                <p>password: <input type="text" name="password"></p>
                <p><input type="submit" value="提交"></p>
            </form>
            `
};
let fn_login = async (ctx, next) => {
    // const body = ctx.request.body
    // let {name,password} = body;
    console.log(ctx)
    let name = ctx.request.body.name || '';
    let password = body.password
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
}

module.exports = {
    'GET /': fn_index,
    'POST /login': fn_login
};
*/
var fn_index = async (ctx, next) => {
    ctx.response.body = `<h1>Index</h1>
        <form action="/signin" method="post">
            <p>Name: <input name="name" value="koa"></p>
            <p>Password: <input name="password" type="password"></p>
            <p><input type="submit" value="Submit"></p>
        </form>`;
};

var fn_signin = async (ctx, next) => {
    var
        name = ctx.request.body.name || '',
        password = ctx.request.body.password || '';
    console.log(`signin with name: ${name}, password: ${password}`);
    if (name === 'koa' && password === '12345') {
        ctx.response.body = `<h1>Welcome, ${name}!</h1>`;
    } else {
        ctx.response.body = `<h1>Login failed!</h1>
        <p><a href="/">Try again</a></p>`;
    }
};

module.exports = {
    'GET /': fn_index,
    'POST /signin': fn_signin
};
