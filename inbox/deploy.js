const HDWalletProvider = require('@truffle/hdwallet-provider');
const { Web3 } = require('web3');
const { interface, bytecode } = require('./compile');

const provider = new HDWalletProvider(
    'hero welcome forest favorite drill jungle rally dentist crater dish cause ecology',
    'https://sepolia.infura.io/v3/55e436c1b19c480fa8e24f753011a080'
    );

const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();
    
    console.log('Attempting to deploy from account', accounts[0]);
    
    const result = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({ data: bytecode, arguments: ['Hi there!'] })
        .send({ gas: '1000000', from: accounts[0] });
    
    console.log('Contract deployed to', result.options.address);
    provider.engine.stop();
}
deploy();