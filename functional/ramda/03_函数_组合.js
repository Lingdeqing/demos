const R = require('ramda');

// 串联函数 从左到右
var negative = x => -1 * x;
var increaseOne = x => x + 1;
console.log(R.pipe(Math.pow, negative, increaseOne)(2, 3))

// 串联函数 从右到左
console.log(R.compose(increaseOne, negative, Math.pow)(2, 3))

// 公式 converge
// R.converge(g, [f1,f2])(a) => g(f1(a), f2(b))
var sumOfArr = arr => {
    var sum = 0;
    arr.forEach(i => sum += i);
    return sum;
  };
var lengthOfArr = arr => arr.length
var average = R.converge(R.divide, [sumOfArr, lengthOfArr])
console.log(average([1,2,3,4,5]))

// 公式 useWith
// R.use(g, [f1,f2])(a1, a2) => g(f1(a1), f2(a2))
console.log(R.useWith(R.add, [negative, increaseOne])(1,2))
