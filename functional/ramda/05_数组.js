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

/**
 * 数组逻辑操作
 */
// 是否包含
console.log(R.contains({a:1})(arr))

// 全部满足
console.log(R.all(R.equals({a:1}))(arr))
console.log(R.all(R.equals({a:1}))([{a:1},{a:1}]))

// 任一满足
console.log(R.any(R.equals({a:1}))(arr))

// 全不满足
console.log(R.none(R.equals({a:1}))(arr))

/**
 * 数组裁剪，所有操作均无副作用
 */
// 数组查找
console.log(R.head(arr)) // 取第一个元素
console.log(R.last(arr))// 取最后一个元素
console.log(R.tail(arr))  // 去除第一个元素
console.log(R.init(arr)) // 去除最后一个元素
console.log(R.nth(1)(arr)) // 取第n个元素
console.log(R.take(2)(arr)) // 取前n个元素
console.log(R.takeLast(2)(arr)) // 取后n个元素
console.log(R.slice(1,3)(arr)) // 截取[m,n)个元素

// 索引
console.log(R.indexOf({a:1})(arr)) 
console.log(R.lastIndexOf({a:1})(arr))


// 删除
console.log(R.remove(1,1)(arr)) // 删除第m个元素后的n个元素

// 插入
console.log(R.insert(1,1)(arr)) // 在第m个元素后插入n
console.log(R.insertAll(1,[1,2,3])(arr)) // 在第m个元素后插入数组n的全部元素
console.log(R.prepend(1)(arr) ) // 在第一个元素前面插入元素
console.log(R.append(1)(arr) ) // 在最后一个元素前面插入元素

// join
console.log(R.join('-')([1,2,3]) ) // 拼接为字符串
console.log(R.intersperse('split')(arr) ) // 插入分隔元素
