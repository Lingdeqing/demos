System.register([], function (_export) {
    return {
        execute: function () {
            function hello(){
                console.log('hello, SystemJS')
            }

            _export('hello', hello);
        }
    };
});