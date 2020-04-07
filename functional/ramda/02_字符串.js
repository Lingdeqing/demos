const R = require('ramda');

// 字符串
console.log(R.split('.')('abc.de.fgh'))
console.log(R.test(/abc/)('abc.de.fgh'))
console.log(R.match(/abc/)('abc.de.fgh'))
