const {Map, List} = require('immutable');
const d = Map({
    a: 1,
    b: 2,
    c: List([
        3,4,5
    ])
})
console.log(d.toArray());   // [1,2, List[3,4,5]]
console.log(d.toObject());  // {a: 1,b: 2,c: List[3,4,5]}
console.log(d.toJS()); // {a: 1, b: 2, c: [3,4,5]}
console.log(JSON.stringify(d)); // {a: 1, b: 2, c: [3,4,5]}