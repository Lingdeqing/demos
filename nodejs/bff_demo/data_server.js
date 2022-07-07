const http = require('http');

// 数据服务
const dataApp = http.createServer((req, res) => {
    handleDataInput(req, res);
});

dataApp.listen(8092, () => {
    console.log('Data Server is running at 8082 port');
});

function handleDataInput(req, res) {
    switch (req.url) {
        case '/data/add':
            res.end('{ code: 200, msg: "success", data: "" }');
            break;
        default:
            res.end('{ code: 500, msg: "route not found", data: "" }');
            break;
    }
}