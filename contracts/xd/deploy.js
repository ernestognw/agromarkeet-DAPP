const HDWalletProvider = require('truffle-hdwallet-provider')
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');
const provider = new HDWalletProvider(
  'chest wink force whip science frog lunch banner talent minute swarm analyst',
  'https://rinkeby.infura.io/5a3fc17b88914c46bdf6d483b8676108'
);
const web3 = new Web3(provider);
const deploy = async () => {
     const accounts = await web3.eth.getAccounts();
console.log('Attempting to deploy from account', accounts[0]);
const result = await new web3.eth.Contract(JSON.parse(interface))
 .deploy({ data: '0x' + bytecode})
 .send({ gas: '1000000', from: accounts[0] });
console.log('Contract deployed to', result.options.address);
console.log(interface, bytecode);
};
deploy();