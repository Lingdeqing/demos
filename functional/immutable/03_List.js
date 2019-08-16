const {List} = require('immutable');
const l1 = List([1,2]);
const l2 = l1.push(3,4,5);
const l3 = l2.unshift(0);
console.log(l1.size);   // 2
console.log(l2.size);   // 5
console.log(l3.size);   // 6
console.log(l3.get(0));   // 0 
console.log(l1.get(0));   // 1

const arr = [5,6];
const l4 = List([3,4]);
const l5 = l1.concat(l4, arr);
console.log(l5);    // List [ 1, 2, 3, 4, 5, 6 ]
