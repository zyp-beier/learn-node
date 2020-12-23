let express = require('express')
let fs = require('fs')
app.engine('html',function (filePath,options,callback) {
    fs.readFile(filePath,function (err,content) {
        if(err)  return callback(new Error(err))
        let rendered = content.toString().replace('#title','' +options.title+'')
            .replace('#message','' + options.message + '')
        return callback(null,rendered)
    })
})

app.set('views','./views')
app.set('views engine','ntl')
