const R = require('ramda');

var arr = [
  1,2,3,4,5
]

// map
console.log(R.map(R.add(1))(arr))

// pluck 取出数组某个属性 组成新数组
console.log(R.pluck('a')([{a:1},{a:3},{a:2},{a:4}]))

// project 数组投影
console.log(R.project(['a'])([{a:1, b:2},{a:3, b:4},{a:2, b:5},{a:4, b:3}]))

// forEach
R.forEach(console.log)(arr)

// reduce
console.log(R.reduce(R.add, 0)(arr))
console.log(R.reduceRight(R.add, 0)(arr))
console.log(R.reduceWhile((_, x)=>x%2===1, R.add, 0)(arr))

// mergeAll
console.log(R.mergeAll([{a:1,b:2}, {c:3}, {b:4}]))

// find
console.log(R.find(R.equals(2))(arr))
console.log(R.findLast(R.equals(2))(arr))
console.log(R.findIndex(R.equals(2))(arr))
console.log(R.findLastIndex(R.equals(2))(arr))


// zip操作
console.log(R.transpose([[1,2,3], ['a', 'b', 'c']]))

// fromPairs
console.log(R.fromPairs([['a', 1], ['b', 2]]))


// ap 先map再合并成一个数组
console.log(R.ap([R.add(1), R.multiply(2)])(arr))


