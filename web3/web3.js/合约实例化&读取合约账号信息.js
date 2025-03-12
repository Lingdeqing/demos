const { Web3 } = require('web3')
// const rpcURL = 'https://mainnet.infura.io/v3/982175e3a07f40a19bcbc2f9c3796830' // Your RPC URL goes here
const rpcURL = 'https://eth.llamarpc.com' // Your RPC URL goes here
const web3 = new Web3(rpcURL)
async function test() {
    // Uniswap token 智能合约地址
    const address = '0x1f9840a85d5af5bf1d1762f925bdaddc4201f984';

    // you can find the complete ABI on etherscan.io
    // https://etherscan.io/address/0x1f9840a85d5af5bf1d1762f925bdaddc4201f984#code
    const abi = [
        {
            name: 'symbol',
            outputs: [{ type: 'string' }],
            type: 'function',
        },
        {
            name: 'totalSupply',
            outputs: [{ type: 'uint256' }],
            type: 'function',
        },
    ];

    // 实例化合约
    const uniswapToken = new web3.eth.Contract(abi, address);

    // 调用call方法
    const symbol = await uniswapToken.methods.symbol().call()
    console.log('Uniswap symbol:', symbol);
    // 调用totalSupply方法
    const totalSupply = await uniswapToken.methods.totalSupply().call()
    console.log('Uniswap Total supply:', totalSupply);

}
test()