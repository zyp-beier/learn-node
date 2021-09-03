const cluster = require('cluster')
const http = require('http')
const numCPUs = require('os').cpus().length

if(cluster.isMaster){
  console.log(`主进程${process.pid}正在运行`);

  console.log(numCPUs);
  //在衍生工作进程
for(let i = 0; i < numCPUs.length; i++){
  cluster.fork()
}

cluster.on('exit',(worker,code,signal) => {
  console.log(`工作进程${worker.process.pid}已退出`);
})
}else{
  http.createServer((req,res) => {
    res.writaHead(200)
    res.end('你好世界')
  }).listen(8000)
  console.log(`工作进程${process.pid}已启动`);
}

