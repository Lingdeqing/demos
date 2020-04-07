const R = require('ramda');


var arr = [
  'a',
  'b',
  'c',
  'A',
  'B'
]
// 计算个数
console.log(R.countBy(R.toLower)(arr))

// 数组拍平
console.log(R.flatten([1,2,3,[4,5,6,[7,8,9]]]))

// 数组调整指定位置元素
console.log(R.adjust(2, R.add(10))([1,2,3,4]))
