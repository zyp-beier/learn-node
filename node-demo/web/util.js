const fs = require('fs')
const path = require('path')
exports.data = function(pathName,callback) {
  if(pathName === '/images/1.jpg') {
    fs.readFile(path.join(__dirname, pathName), function(err,data) {
      if (err) {
        return err
      }
      callback(data)
    })
    return
  }
  fs.readFile(path.join(__dirname, pathName), 'utf8', function(err,data) {
    if (err) {
      return err
    }
    callback(data)
  })
}