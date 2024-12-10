
const path = require('path');
const fs = require('fs');
const Koa = require('koa');
const app = new Koa();

const mimes = {
    'css': 'text/css',
    'less': 'text/css',
    'gif': 'image/gif',
    'html': 'text/html',
    'ico': 'image/x-icon',
    'jpeg': 'image/jpeg',
    'jpg': 'image/jpeg',
    'js': 'text/javascript',
    'json': 'application/json',
    'pdf': 'application/pdf',
    'png': 'image/png',
    'svg': 'image/svg+xml',
    'swf': 'application/x-shockwave-flash',
    'tiff': 'image/tiff',
    'txt': 'text/plain',
    'wav': 'audio/x-wav',
    'wma': 'audio/x-ms-wma',
    'wmv': 'video/x-ms-wmv',
    'xml': 'text/xml'
}
const staticPath = path.resolve(__dirname, './sites')
app.use(async (ctx, next) => {
    const filePath = path.join(staticPath, decodeURIComponent(ctx.url));
    let content = '404 not found'
    if (fs.existsSync(filePath)) {
        const stat = fs.statSync(filePath);
        if (stat.isDirectory()) {
            const files = fs.readdirSync(filePath);
            content = files.map(file => {
                const url = path.relative(staticPath, path.join(filePath, file));
                return `<p><a href="${url}">${url}</a></p>`
            }).join('');
        } else {
            const extname = path.extname(filePath);
            ctx.type = mimes[extname ? extname.slice(1) : 'unknown'];
            content = fs.readFileSync(filePath, 'binary');
        }
    }

    ctx.set('Cache-Control', 'max-age=31536000');
    if (ctx.type.indexOf('image') > -1) {
        ctx.res.writeHead(200);
        ctx.res.write(content, 'binary');
        ctx.res.end();
    } else {
        ctx.body = content;
    }
});

app.listen(3000)