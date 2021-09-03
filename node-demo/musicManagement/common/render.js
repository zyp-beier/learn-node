const fs = require('fs')
const path = require('path')
const _ = require('underscore')
const config = require('../config')
module.exports = function (res) {
  res.render = function (viewName, obj) {
    fs.readFile(path.join(config.viewPath,viewName)+ '.html','utf8',function(err,data) {
      if (err) {
        return res.end(err.message)
      }
      let compiled = _.template(data)
      let htmlStr = compiled(obj || {})
      res.end(htmlStr)
    })
  }
}