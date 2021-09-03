
console.log('模块被加载了');
exports.sayHi = function(hi) {
  console.log('hi');
}

// exports = [1,2,3]  //exports不能单独定义并返回数据类型


// module.exports = 12 // 12
// module.exports = {a: '1'} // {a: '1'}
// module.exports = function a(){} // [Function: a]
// exports = 12 // {}
// exports = {a: '1'} // {}
// exports = function a(){} // {}