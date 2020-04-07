const R = require('ramda');

/**
 * 数组排序，所有操作均无副作用
 */
var byA = R.ascend(R.prop('a'))
var byA1 = R.descend(R.prop('a'))
var byB = R.descend(R.prop('b'))
var arr = [
  {a:8, b: 1},
  {a:10, b: 2},
  {a:1, b: 3},
  {a:3, b: 4},
  {a:2, b: 5},
  {a:2, b: 6},
  {a:2, b: 7},
]
console.log(R.sort(byA)(arr))
console.log(R.sort(byA1)(arr))
console.log(R.sortWith([byA, byB])(arr))  // 多重排序，先按a排序，再按b排序
console.log(R.sortBy(R.prop('a'))(arr)) // 按照返回值排序