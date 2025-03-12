const { Web3 } = require('web3')
// const rpcURL = 'https://mainnet.infura.io/v3/982175e3a07f40a19bcbc2f9c3796830' // Your RPC URL goes here
const rpcURL = 'https://eth.llamarpc.com' // Your RPC URL goes here
const web3 = new Web3(rpcURL)
async function test() {
    // 创建一个账号
    const [account1] = web3.eth.accounts.wallet.create(1);
    console.log(account1)

    // 添加已有账号到钱包中
    const wallet = web3.eth.accounts.wallet.add('0x50d349f5cf627d44858d6fcb6fbf15d27457d35c58ba2d5cfeaf455f25db5bec') // 这个私钥测试得换成主网真实账号

    console.log(wallet[1].privateKey)
    console.log(wallet[1].address) // address可以由privateKey推算出来
}
test()