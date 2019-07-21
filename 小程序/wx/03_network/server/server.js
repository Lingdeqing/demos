const koa = require('koa');
const Router = require('koa-router');
const cors = require('@koa/cors');
const app = new koa();
const router = new Router({
    prefix: '/test' // 必须带斜杠
});
let counter = 1;
app.use(cors());
router.get('/get/info', (ctx, next) => {
    ctx.body = {
        code: 0,
        data: `${counter++}.some info from private backend server.`,
        message: 'ok'
    }
})
app.use(router.routes())
    .use(router.allowedMethods())
app.listen(23000);