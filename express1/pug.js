var express = require('express')
var router = express.Router()

router.use(function timeLog(req,res,next) {
    console.log('now',Date.now())
    next()
})
router.get('/index',function (req,res) {
    res.render('index',{title: 'Hey',message: 'hello there'})
})
module.exports = router
