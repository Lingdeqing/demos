
const Koa = require('koa');
const app = new Koa();

function parsePostData(ctx) {
    return new Promise((resolve, reject) => {
        let data = ''
        ctx.req.on('data', chunk => {
            data += chunk;
        })
        ctx.req.on('end', () => {
            const query = parseQueryStr(data);
            resolve(query)
        })
        ctx.req.on('error', reject);
    })
}

function parseQueryStr(str) {
    const query = {};
    for (let item of str.split('&')) {
        let [key, val] = item.split('=');
        query[key] = decodeURIComponent(val);
    }
    return query;
}

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
        const postData = await parsePostData(ctx);
        ctx.body = postData
    } else {
        ctx.body = '404 not found'
    }
});

app.listen(3000)