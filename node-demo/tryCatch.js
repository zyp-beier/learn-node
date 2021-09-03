
//同步函数捕捉异常
// function parseJsonStrToObj(foo) {
//   return JSON.parse(foo)
// }

// try {
//   let foo = '{"firstname":"Jesper","surname":"Aaberg","phone":["555-0100","555-0120"]}'
//   let obj = parseJsonStrToObj('foo')
//   console.log(obj);
// } catch (e){
//   console.log(e);
// }


// 异步函数捕捉异常

function eating() {
  console.log('吃饭');
  setTimeout(() => {
    console.log('吃完了');
  },0)
}

try {
  eating()
} catch (e) {
  console.log(1);
  console.log(e);
}