const fs = require('fs')
const path = require('path')
const _ = require('underscore')
const musicController = require('./controllers/music')
const url = require('url')

module.exports = function(req,res) {
  const urlObj = url.parse(req.url,true)
  req.query = urlObj.query
  let pathname = urlObj.pathname
  let method = req.method
  if (method === 'GET' && pathname === '/index.html') {
    musicController.showIndex(req,res)
  } else if(method === 'GET' && pathname.startsWith('/node_modules/')) {
    let staticPath = path.join(__dirname,pathname)
    fs.readFile(staticPath, 'utf8', function(err,data) {
      if(err) {
        console.log(err);
        return res.end(err.message)
      }
      res.end(data)
    })
  } else if(method === 'GET' && pathname === '/add') {
    musicController.showAdd(req,res)
  } else if(method === 'GET' && pathname === '/edit') {
    musicController.showEdit(req,res)
  }else if(method === 'POST' && pathname === '/add') {
    musicController.doAdd(req,res)
  }else if(method === 'GET' && pathname === '/remove') {
    musicController.doRemove(req,res)
  }else if(method === 'POST' && pathname === '/edit') {
    musicController.doEdit(req,res)
  }
}