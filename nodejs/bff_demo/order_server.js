const http = require('http');

// 订单服务
const orderApp = http.createServer((req, res) => {
    handleOrderInput(req, res);
});

function handleOrderInput(req, res) {
    switch (req.url) {
        case '/order/add':
            res.end('{ code: 200, msg: "success", data: "" }');
            break;
        default:
            res.end('{ code: 500, msg: "route not found", data: "" }');
            break;
    }
}

orderApp.listen(8091, () => {
    console.log('Order Server is running at 8081 port');
});