const R = require('ramda');

// curry 将多个参数的函数变成单参数形式
Math.max = R.curry(Math.max)
console.log(Math.max(1)(2))

// partial 函数最左边的部分参数预置值 partialRight 从右边算
var gt10 = R.partial(R.lte, [10])
console.log(gt10(11))
console.log(gt10(9))

// memoize 缓存
var f = R.memoizeWith(R.identity, (A) => A === 1 ? 1 : A * f(A-1)) // A!
console.log(f(10))
console.log(f(10))


// 函数取反
var lte10 = R.complement(gt10)
console.log(lte10(11))
console.log(lte10(9))

// binary 函数只传入前两个参数，后面的参数忽略
console.log(Math.min(5,4,3,2,1))
console.log(R.binary(Math.min)(5,4,3,2,1))

// apply 数组转成参数序列传入函数 类似 ...
console.log(R.apply(Math.min)([1,2,3,4,5]))

// 参数模板
var statTemplate = R.applySpec({
  max: Math.max,
  min: Math.min
})
console.log('statTemplate: ', statTemplate(1,2,3,4,5))



// tap 执行指定函数，透传值
var log = R.tap((v) => console.log('log: ', v))
console.log(R.pipe(Math.min, log, R.add(1))(1,2,3,4))
