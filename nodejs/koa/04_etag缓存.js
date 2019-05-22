
const crypto = require('crypto');
const Koa = require('koa');
const app = new Koa();

app.use(async (ctx, next) => {
    ctx.status = 200;
    ctx.body = ctx.url;
    ctx.set('ETag', crypto.createHash('md5').update(ctx.body).digest('hex'));

    if(ctx.fresh){
        ctx.status = 304;
        return;
    }
});

app.listen(3000)