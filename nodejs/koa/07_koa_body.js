
const Koa = require('koa');
const koaBody = require('koa-body');
const app = new Koa();

app.use(koaBody());
app.use(async (ctx, next) => {
    if (ctx.url === '/' && ctx.method === 'GET') {
        ctx.body = `
        <form method="POST" action="/">
            <p>name</p>
            <input type="text" name="name"/>
            <p>password</p>
            <input type="password" name="password"/>
            <button type="submit">提交</submit>
        </form>
        `
    } else if (ctx.url === '/' && ctx.method === 'POST') {
        ctx.body = ctx.request.body;
    } else {
        ctx.body = '404 not found'
    }
});

app.listen(3000)