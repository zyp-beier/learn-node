const express = require('express')
const app = express()

app.configure(function () {
    app.set('view engine', 'jade')
})
app.get('/',function (req,res) {
    res.render('index',{pageTitle: 'jade使用示例',layout:false},function (err,html) {
        if(err) console.log(err)
        else{
            res.send(html)
        }

    })

})

app.listen(8081,'127.0.0.1')
