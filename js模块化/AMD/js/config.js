requirejs.config({
    baseUrl: './js',
    paths: {
        app: 'main'
    }
});

requirejs(['app'], function (app) {
    app.hello();
});