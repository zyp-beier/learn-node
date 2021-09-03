const express = require('express');
var router = express.Router();
const index = require('../middlewares/index')





router.use(function(req,res,next) {
  console.log('中间件')
  console.log('time',new Date().toLocaleTimeString());
  next()
})
/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(index)
  next()
},function(req,res) {
  res.render('index', { title: 'hello,word' });
});

router.get('/list', index.transmission(), index.reception(), index.send())

router.get('/itemInfo', index.handleItemInfo(), index.itemInfo())

module.exports = router;
