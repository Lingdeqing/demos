
const Koa = require('koa');
const app = new Koa();

app.keys = ['a random key', 'another key'];

app.use(async (ctx, next) => {
    ctx.cookies.set('name', 'tobi', {signed: true, httpOnly: false});
    ctx.body = `<script>document.write(document.cookie)</script><p>作用：防止客户端篡改cookie</p>`;
});

app.listen(3000)