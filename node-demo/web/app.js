const http = require('http')
const data = require('./util')
const path = require('path')
const _ = require('underscore')
const app = http.createServer()


app.on('request',function(req,res) {
  let url = req.url
  console.log('url', url);
  if(url === '/') {
    data.data('static/index.html',function(data) {
      let compiled = _.template(data)
      let htmlStr = compiled({
        title: 'hello,world',
        arr: [
          {name: 'zhaoyinping'},
          {name: 'wangbin'},
          {name: 'liuhaoran'}
        ]
      })
      res.end(htmlStr)
    })
  } else if (url === '/register'){
    data.data('static/register.html',function(data) {
      res.end(data)
    })
  } else if (url === '/login'){
    data.data('static/login.html',function(data) {
      res.end(data)
    })
  } else if (url === '/images/1.jpg'){
    data.data('/images/1.jpg',function(data){
      res.end(data)
    })
  } else if (url === '/images/1.jpg'){
    data.data('/images/1.jpg',function(data){
      res.end(data)
    })
  } else if (url === '/css/login.css'){
    data.data('/css/login.css',function(data){
      res.end(data)
    })
  }else{
    data.data('/static/404.html',function(data){
      res.end(data)
    })
  }
})

app.listen(3200,'127.0.0.1', function(err) {
  if(err){
    return err
  }
})