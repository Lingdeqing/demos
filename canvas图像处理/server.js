const Koa = require('koa');
const app = new Koa();
const router = require('koa-router')();
const koaBody = require('koa-body');
const serve = require('koa-static')
const cors = require('@koa/cors');
const fs = require('fs')

const uploadDir = './upload_images'
fs.mkdirSync(uploadDir, { recursive: true })

app.use(cors({
    origin: '*',
    allowMethods: '*',
    allowHeaders: '*'
}))
router.post('/upload', koaBody({
    multipart: true,
    formidable: {
        uploadDir,
        keepExtensions: true
    }
}),
    (ctx) => {
        ctx.body = {
            code: 0,
            data: `http://localhost:23333/${ctx.request.files.file.path}`
        }
    }
);

app.use(router.routes());
app.use(serve('./'))
app.listen(23333);