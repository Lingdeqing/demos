const R = require('ramda');

function Obj() {
  this.a = 1
}
Obj.prototype.b = 2

var o = new Obj


// 属性存在性判断
console.log(R.has('a')(o))
console.log(R.has('b')(o))
console.log(R.hasIn('a')(o))
console.log(R.hasIn('b')(o))

// 属性是否等于某个值
console.log(R.propEq('b', 1)(o))
console.log(R.whereEq({ a: 1, b: 2 })({ a: 1, b: 2, c: 3 }))
console.log(R.whereEq({ a: 1, b: 2 })({ a: 1, b: 3, c: 3 }))
console.log(R.where({ a: R.equals(1), b: R.equals(2) })({ a: 1, b: 2, c: 3 }))

// 获取指定属性
console.log(R.prop('b')(o))

// 获取嵌套属性

// 裁剪属性
console.log(R.assoc('b', 3)({ a: 1 }))
console.log(R.dissoc('b')({ a: 1, b: 1 }))
console.log(R.pick(['a', 'b', 'd'])({ a: 1, b: 2, c: 3 }))
console.log(R.pickAll(['a', 'b', 'd'])({ a: 1, b: 2, c: 3 }))
console.log(R.pickBy(x => x % 2 === 0)({ a: 1, b: 2, c: 3, d: 4 }))

// 分组
console.log(R.partition(x => x % 2 === 0)({ a: 1, b: 2, c: 3, d: 4 }))

// 比较
console.log(R.eqProps('a')({ a: { a: 1 }, b: 3 }, { a: { a: 1 }, b: 2 }))


// path操作
console.log(R.path(['a', 'b'])({
  a: {
    b: '*****'
  }
}))
console.log(R.pathEq(['a', 'b'], 2)({ a: { b: 2 } }))
console.log(R.assocPath(['a', 'b'], 5)({}))





