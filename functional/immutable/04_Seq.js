const {Seq} = require('immutable');
const s = Seq({
    a:1,
    b:2
}).map(x => x * 2)  // 无副作用 惰性求值
console.log(s.get('a'));

const c = Seq({
    a: 1,
    b: 2
}).map(x => x*x).cacheResult(); // 取消惰性求值
console.log(c.get('b') + c.get('b'))    // b的值只会计算一次