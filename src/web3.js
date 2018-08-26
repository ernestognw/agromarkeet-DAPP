import HDWalletProvider from 'truffle-hdwallet-provider';
import Web3 from 'web3';

const provider = new HDWalletProvider(
  'chest wink force whip science frog lunch banner talent minute swarm analyst',
  'https://rinkeby.infura.io/5a3fc17b88914c46bdf6d483b8676108'
);

const web3 = new Web3(window.web3.currentProvider);

export default web3;