const R = require('ramda');

const greet = R.replace('{name}', R.__, 'Hello, {name}!');
console.log(greet('Alice'));

const replaceStar = R.replace(R.__, '*', R.__);
console.log(replaceStar('a', 'acbabe'));
console.log(replaceStar(/a/g, 'acbabe'));