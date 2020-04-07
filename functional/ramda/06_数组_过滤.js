const R = require('ramda');


var arr = [
  {a:8},
  {a:10},
  {a:1},
  {a:3},
  {a:2},
  {a:6},
  {a:4},
]
// 过滤
var isEven = o => o.a%2===0
console.log(R.filter(isEven)(arr))  
console.log(R.reject(isEven)(arr))  // 和filter相反
console.log(R.takeWhile(isEven)(arr)) // 和filter类似，但是一旦不满足条件，就不会向后遍历
console.log(R.dropWhile(isEven)(arr)) // 和takeWhile相反
console.log(R.without([{a:1}])(arr))  // 排除一些值
