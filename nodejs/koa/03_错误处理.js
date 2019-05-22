
const Koa = require('koa');
const app = new Koa();

app.use(async (ctx, next) => {
    if(ctx.url === '/error'){
        console.log(shit);
    }
    if(ctx.url === '/error2'){
        ctx.throw(400, 'error2 expose');
    }
    if(ctx.url.includes('/error3')){
        const err = new Error('error3 expose');
        err.status = 400;
        err.expose = ctx.url.includes('expose');
        throw err;
    }
    ctx.body = `app.on("error")`;
});

app.on('error', (error) => {
    console.log('出错了: '+error);
})

app.listen(3000)