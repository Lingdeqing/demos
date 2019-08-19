const {Map, is} = require('immutable');
const m1 = Map({a: 1, b: 2});
const m2 = Map({a: 1, b: 2});
console.log(m1 === m2); // false
console.log(m1.equals(m2)); // true
console.log(is(m1, m2)); // true
const m3 = m1.set('a', 1);
console.log(m1 === m3); // true
const m4 = m1.set('a', 2);
const m5 = Map({a: 2, b: 2});
console.log(m1 === m4); // false
console.log(m4 === m5); // false
const m6 = m5.set('a', 2);
const m7 = m5.set('a', 2);
console.log(m5 === m6); // true
console.log(m7 === m6); // false
