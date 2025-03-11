const { Web3 } = require('web3')
// const rpcURL = 'https://mainnet.infura.io/v3/982175e3a07f40a19bcbc2f9c3796830' // Your RPC URL goes here
const rpcURL = 'https://eth.llamarpc.com' // Your RPC URL goes here
const web3 = new Web3(rpcURL)
async function test() {

    // 转账交易
    const wallet = web3.eth.accounts.wallet.add('') // 这个私钥测试得换成主网真实账号
    // 查询余额
    const balance = await web3.eth.getBalance(wallet[1].address);
    console.log(web3.utils.fromWei(balance, 'ether'))
    // 交易信息    
    const tx = {
        from: wallet[0].address, // the "from" address must match the one previously added with wallet.add
        to: '0x2aaea63161e0c27a4a9cc579da1295fd638ae1e3',
        value: web3.utils.toWei('0.000100000663367633', 'ether'),
    };
    // 向链上发布交易
    const txReceipt = await web3.eth.sendTransaction(tx); // 大概要等待三四十秒左右，发布到链上十几秒，生成区块十几秒
    console.log('Tx hash:', txReceipt.transactionHash); // 打印后，程序还有部分异步校验链上数据的等待，才会退出程序

}
test()