const dns = require('dns')

dns.lookup('iana.org',(err,address,family) => {
  console.log('ip地址: %j 地址族：ipv%s',address,family)

})