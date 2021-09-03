const assert = require('assert')

var list1 = [1, 2, 3, 4, 5];
var list2 = [1, 2, 3, 4, 5, 6];

assert.deepEqual(list1, list2, '预期两个数组应该有相同的属性');


// function add (a, b) {
//   return a + b;
// }

// let expected = add(1,2);
// assert.ok( expected === 2, '预期1加2等于3');

// const obj4 = Object.create(obj1)

// assert.deepEqual(obj1, obj1);

// assert.deepEqual(obj1, obj2);

// assert.deepEqual(obj1, obj3);

// assert.deepEqual(obj1, obj4);


// assert.ok(true)

// assert.ok('false')

// assert.ok(false)`