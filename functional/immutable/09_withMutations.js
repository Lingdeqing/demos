const {List} = require('immutable');
const l1 = List([1,2,3]);
const l2 = l1.withMutations(function(l){
    l.push(4).push(5)
})
console.log(l1.size);
console.log(l2.size)