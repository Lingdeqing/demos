const R = require('ramda');


var arr = [
  'a',
  'b',
  'c',
  'A',
  'B'
]
// 拼接数组
console.log(R.concat([1])([2]))

// zip操作
console.log(R.zip([1,2,3])([4,5,6]))
console.log(R.zipObj([1,2,3])([4,5,6]))

// 数组成员两两混合
console.log(R.xprod([1,2])(['a', 'b']))

// 计算数组交集 A交B
console.log(R.intersection([1,2])([1,2,3]))

// 计算数组差集 A-B
console.log(R.difference([1,2,4,5])([1,2,3]))

// 计算数组差集 A并B-A交B
console.log(R.symmetricDifference([1,2,4,5])([1,2,3]))
