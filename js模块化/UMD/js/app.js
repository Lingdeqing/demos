(function (root, factory) {
    if (typeof module === 'object' && module.exports) { // CommonJS
        module.exports = factory(require('./main'))
    } else if (typeof define === 'function' && define.amd) { // AMD
        define(['main'], factory)
    } else { // other
        root['app'] = factory(root['main'])
    }
}(this, function (main) {
    main.hello()
}))