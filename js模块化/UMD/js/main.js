(function (root, factory) {
    if (typeof module === 'object' && module.exports) { // CommonJS
        module.exports = factory()
    } else if (typeof define === 'function' && define.amd) { // AMD
        define(factory)
    } else { // other
        root['main'] = factory()
    }
}(this, function () {
    return {
        hello: function () {
            typeof alert === 'function' ? alert("hello, umd~") : console.log("hello, umd~");
        }
    }
}))