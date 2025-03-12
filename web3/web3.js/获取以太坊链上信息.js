const { Web3 } = require('web3')
// const rpcURL = 'https://mainnet.infura.io/v3/982175e3a07f40a19bcbc2f9c3796830' // Your RPC URL goes here
const rpcURL = 'https://eth.llamarpc.com' // Your RPC URL goes here
const web3 = new Web3(rpcURL)
async function test() {
    const blockNumber = await web3.eth.getBlockNumber();
    const chainId = await web3.eth.getChainId();
    const balance = await web3.eth.getBalance('0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045');
    const nonce = await web3.eth.getTransactionCount('0x37826D8B5F4B175517A0f42c886f8Fca38C55Fe7');
    const gasPrice = await web3.eth.getGasPrice();
    console.log(blockNumber, chainId, balance, web3.utils.fromWei(balance, 'ether'), nonce, web3.utils.fromWei(gasPrice, 'ether'))
}
test()