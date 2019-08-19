const {fromJS, Map, List} = require('immutable');
const n1 = fromJS({
    a: {
        b: {
            c: [1,2,3]
        }
    }
})
const n2 = n1.mergeDeep({
    a: {
        b: {
            d: 4
        }
    }
})

console.log(n2.getIn(['a', 'b', 'd']))  // 4

const n3 = n2.updateIn(['a', 'b', 'd'], v => v+1);
console.log(n3.getIn(['a', 'b', 'd'])); // 5

const n4 = n3.updateIn(['a', 'b', 'c'], c => c.push(6));
console.log(n4.getIn(['a', 'b', 'c'])); // List[1,2,3,6]