
const Koa = require('koa');
const app = new Koa();

function route(url){
    let view = 'not found';
    switch(url){
        case '/':
        case 'index':
            view = 'index';
            break;
        case '/list':
            view = 'list';
            break;
    }
    return view;
}

app.use(async (ctx, next) => {
   ctx.body = route(ctx.request.url);
});

app.listen(3000)