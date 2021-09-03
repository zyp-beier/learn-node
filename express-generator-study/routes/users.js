var express = require('express');
var router = express.Router();


const list = [
  {
    id: 1,
    name: '王斌',
    year: 1993,
    address: '安徽 芜湖 无为'
  },
  {
    id: 2,
    name: '郭腾跃',
    year: 1998,
    address: '河南开封杞县'
  },
  {
    id: 3,
    name: '石壮壮',
    year: 1996,
    address: '河南开封杞县'
  },
  {
    id: 4,
    name: '鲁春龙',
    year: 1996,
    address: '河南开封杞县'
  },
]
/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log('用户列表');
  next()
},function(req,res) {
  res.render('userList',{list})
});


router.get('/infomation/:id',function(req,res){
  let {id} = req.params
  let user = list.find((item) => {
    return item.id === parseInt(id)
  })
  res.render('userInfo',user)
})

module.exports = router;
