const crypto = require('crypto')

const sercret = 'zhaoyinping'
const hash = crypto.createHmac('sha256',sercret).update('i love you').digest('hex')

console.log(hash);

