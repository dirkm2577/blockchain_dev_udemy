const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

const provider = new HDWalletProvider(
    'hero welcome forest favorite drill jungle rally dentist crater dish cause ecology',
    'https://sepolia.infura.io/v3/55e436c1b19c480fa8e24f753011a080'
    );

const web3 = new Web3(provider);