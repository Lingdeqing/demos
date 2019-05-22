
const Koa = require('koa');
const app = new Koa();

app.use(async (ctx, next) => {
    if(ctx.url === '/error'){
        console.log(shit);
    }
    ctx.body = `app.on("error")`;
});

app.on('error', (error) => {
    console.log('出错了: '+error);
})

app.listen(3000)