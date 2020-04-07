const R = require('ramda');

// 去除指定属性
console.log(R.omit(['a', 'b'])({a:1,b:2,c:3}))
console.log(R.dissoc('a')({a:1,b:2,c:3}))

// 过滤不符合条件的属性
console.log(R.filter(x=>x%2===1)({a:1,b:2,c:3}))
console.log(R.reject(x=>x%2===1)({a:1,b:2,c:3}))

