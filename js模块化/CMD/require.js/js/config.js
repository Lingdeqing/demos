requirejs.config({
    baseUrl: './js',
    paths: {
        main: 'main'
    }
});

define('app', function(require, exports, module){
    var main = require('main')
    main.hello();
})

requirejs(['app']);