const fs = require('fs')

fs.readFile('./lyrics.txt','utf8',(err,data) => {
  if(err) {
    console.log(err);
    return
  }
  let lines = data.toString().split('\n')
   for (let i=0; i< lines.length; i++) { 
    (function (index) {
      setTimeout(function() {
        console.log(index);
      }, 1000);
    })(i)
  }
})