const path = require('path')
module.exports = {
  port: 8400,
  host: '127.0.0.1',
  viewPath: path.join(__dirname,'views'),
  uploadPath: path.join(__dirname, 'uploads')
}