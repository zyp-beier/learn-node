const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const session = require('express-session')

const redis = require('./db/redise')
const RedisStore = require('connect-redis')(session)


const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const redisRouter = require('./routes/redisdemo')
const router = require('./routes/index');

// 一个模块中的JS代码仅在模块第一次被使用时执行一次，并在执行过程中初始化模块的导出对象。之后，缓存起来的导出对象被重复利用。
// const count = require('./count')
// const count2 = require('./count')

// console.log(count.count()); //1
// console.log(count2.count()); //2
// console.log(count2.count()); //3

let app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use(
  session({
    store: new RedisStore({client: redis}),
    resave: false,
    saveUninitialized: true
  })
)


app.get('/', function(req,res) {
  res.render('index', { title: 'hello,word' });
});

app.use('/index', indexRouter)
app.use('/users', usersRouter)
app.use('/redis', redisRouter)


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
