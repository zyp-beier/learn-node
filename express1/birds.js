var express = require('express')
var router = express.Router()

router.use(function timeLog(req,res,next) {
    console.log("now" ,Date.now())
    next()
})


router.get('/about',function (req,res) {
    res.send('about birds')
})

router.get('/user')

module.exports = router
