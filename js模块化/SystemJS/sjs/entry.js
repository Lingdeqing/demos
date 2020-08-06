System.register(['./dep.js'], function (_export) {
    let dep;

    return {
        setters: [
            function (ns) {
                dep = ns;
            }
        ],
        execute: function () {
            dep.hello()
        }
    }
})