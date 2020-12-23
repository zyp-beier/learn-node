const crypto = require('crypto');
const hash = crypto.createHash('md5');
const hmac = crypto.createHmac('sha256','secret-key')

hash.update('hello,world')
hash.update('hello,world')
hash.update('hello,node.js')
hmac.update('hello,node.js')

console.log(hash.digest('hex'))
console.log(hmac.digest('hex'))
