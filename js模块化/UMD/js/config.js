requirejs.config({
    baseUrl: './js',
    paths: {
        main: 'main',
        app: 'app'
    }
});

requirejs(['app']);