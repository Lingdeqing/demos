const R = require('ramda');

// 比较运算
console.log(R.gt(2)(1))
console.log(R.gt('a')('z'))
console.log(R.gte(2)(2))

console.log(R.equals(1)(2))
console.log(R.equals(1)()(1))
console.log(R.equals([1,2,3])([1,2,3]))
console.log(R.equals({a:1,b:2})({a:1,b:2}))
console.log(R.equals({a:{a:1},b:2})({a:{a:1},b:2}))

console.log(R.eqBy(Math.abs)(5)(-5))

// 数学运算
console.log(R.add(1)(2))
console.log(R.subtract(1)(2))
console.log(R.multiply(1)(2))
console.log(R.divide(1)(2))

// 逻辑运算
var gt10 = x => x>10
var even = x => x%2 === 0
console.log(R.either(gt10, even)(11))
console.log(R.either(gt10, even)(12))
console.log(R.both(gt10, even)(11))
console.log(R.both(gt10, even)(12))
console.log(R.allPass([gt10, even])(11))
console.log(R.allPass([gt10, even])(12))
