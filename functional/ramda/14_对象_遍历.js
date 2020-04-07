const R = require('ramda');

function Obj(){
    this.a = 1
    this.b = 1
  }
Obj.prototype.c = 2

var o = new Obj

// key
console.log(R.keys(o))
console.log(R.keysIn(o))

// values
console.log(R.values(o))
console.log(R.valuesIn(o))

// kv🙃️
console.log(R.invertObj({a:1,b:2,c:1}))
console.log(R.invert({a:1,b:2,c:1}))

// map
console.log(R.map(R.add(1))({a:1,b:2,c:1}))
// evolve
console.log(R.evolve({a:R.add(2), b: R.multiply(2)})({
    a: 5,
    b: 5
}))

// merge
console.log(R.merge({a:1, c: 1}, {b:2, c:2}))
console.log(R.mergeWith(R.add, {a:1, c: 1}, {b:2, c:2}))






