const {Record} = require('immutable');
const ABRecord = Record({a: 1,b :2});
const record = ABRecord({b:3, x: 4});
console.log(record.get('b'));
record.remove('b');
console.log(record.get('b'));
console.log(record.get('a'));
console.log(record.get('x'));