seajs.config({
    baseUrl: './js',
    paths: {
        main: 'main'
    }
});

define(function(require, exports, module){
    var main = require('main')
    main.hello();
})
