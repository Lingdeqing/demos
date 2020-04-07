const R = require('ramda');


var arr = [
  'a',
  'b',
  'c',
  'A',
  'c',
  'B'
]

console.log(R.splitAt(1)(arr))  // 在位置n处分组
console.log(R.splitEvery(2)(arr))  // 每n个分为一组
console.log(R.splitWhen(R.equals('c'))((arr)))  // 满足条件处裂为两组
console.log(R.partition(R.equals('c'))((arr)))  // 分为满足条件的和不满足条件的两组
console.log(R.groupWith(R.equals)(arr))  // 两两比较，相等的放一组
console.log(R.groupBy(R.identity)(arr))  // 同一个返回值 放到一组


