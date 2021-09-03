const crypto = require('crypto')
const fs = require('fs')
//HMAC算法
const pem = fs.readFileSync('key.pem')
const key = pem.toString('ascii')
const shasum = crypto.createHash('sha1',key)
const s = fs.ReadStream('./text')
//散列算法 （hash算法）
// const shasum = crypto.createHash('sha1')
// const s = fs.ReadStream('./text')

s.on('data',function (d) {
    shasum.update(d)
})

s.on('end',function () {
    const d = shasum.digest('hex')
    console.log(d)
})
