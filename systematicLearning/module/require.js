const foo = require('./foo')
let myFoo = new foo('tom',40)  //新建模块对象
console.log('获取修改前的私有变量值')
console.log(myFoo.GetAge())  //获取模块对象内的_age私有变量值
console.log('修改私有变量值')
myFoo.SetName('zhaoyinping')//设置模块对象内的_name私有变量值
maFoo.SetAge(18)//设置模块对象内的_age私有变量值
console.log('获取修改后的私有变量值')
console.log(myFoo.GetAge())
console.log('获取修改前的公有变量值')
console.log(myFoo.name)
console.log(myFoo.age)


