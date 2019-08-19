const {Seq, Range} = require('immutable');
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

const res = Range(1, Infinity)
    .skip(1000)
    .map(n => -n)
    .filter(n => n % 2 === 0)
    .take(2)
    .reduce((r, n) => r * n, 1);
console.log(res);