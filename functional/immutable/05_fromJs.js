const {fromJS, Map, List} = require('immutable');
const m = fromJS({
    a: 1,
    b: 2
})
console.log(Map.isMap(m));

const a = fromJS([
    1,
    2
])
console.log(List.isList(a));

const c = fromJS({
    1: 'one'
})
console.log(c.get(1));
console.log(c.get('1'));