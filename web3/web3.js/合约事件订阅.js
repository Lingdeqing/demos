const { Web3 } = require('web3')
// const rpcURL = 'https://mainnet.infura.io/v3/982175e3a07f40a19bcbc2f9c3796830' // Your RPC URL goes here
const rpcURL = 'https://ethereum-rpc.publicnode.com' // Your RPC URL goes here
const web3 = new Web3(rpcURL)
const wss3 = new Web3('wss://ethereum.publicnode.com');
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
        { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "Transfer", "type": "event" }
    ];

    // 实例化合约
    const uniswapToken = new web3.eth.Contract(abi, address);

    const blockNumber = 22022610n//await web3.eth.getBlockNumber();
    console.log('blockNumber:', blockNumber)

    // 1. 查询过去的事件
    const eventTransfer = await uniswapToken.getPastEvents('Transfer', { fromBlock: blockNumber - 5n }); // 最多查询过去100,000个块
    console.log(eventTransfer);

    // 2. 订阅未来的事件
    // websocket实例化合约
    const uniswapToken2 = new wss3.eth.Contract(abi, address);
    // create the subscription to all the 'Transfer' events
    const subscription = uniswapToken2.events.Transfer();
    // listen to the events
    subscription.on('data', console.log);

}
test()