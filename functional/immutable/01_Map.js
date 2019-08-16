const {Map} = require('immutable');
const m1 = Map({a: 1, b: 2});
const m2 = m1.set('b', 3);
console.log(m1.get('b') + ' vs. '+m2.get('b')); // 2 vs. 3

const obj = {a:3};
const m4 = m1.merge(m2, obj);
console.log(m4);    // Map { "a": 3, "b": 3 }