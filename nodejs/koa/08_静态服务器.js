
const path = require('path');
const fs = require('fs');
const Koa = require('koa');
const app = new Koa();

const staticPath = './'
app.use(async (ctx, next) => {
    const filePath = path.join(staticPath, decodeURIComponent(ctx.url));
    let content = '404 not found'
    if(fs.existsSync(filePath)){
        const stat = fs.statSync(filePath);
        if(stat.isDirectory()){
            const files = fs.readdirSync(filePath);
            content = files.map(file => {
                const url = path.join(filePath, file);
                return `<p><a href="${encodeURIComponent(url)}">${url}</a></p>`
            }).join('');
        } else {
            content = fs.readFileSync(filePath, 'binary' );
        }
    } 
    ctx.body = content;
});

app.listen(3000)