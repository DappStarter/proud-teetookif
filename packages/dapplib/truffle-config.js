require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea nature tail sign struggle crawl noise mistake hunt forget flower gentle'; 
let testAccounts = [
"0x32225671f6f3c3c58e52ff654a220b96b3274e4b7d2718b4b8ac7e62190e2af5",
"0xa1c495a35c56f286c6e6c3ed3af45cbc8091c66964a5d72bfd5453502b8681d4",
"0x071fa89e73cd36ea874878291df221ff94c3541558e120be1c026be82c090c6b",
"0x516cedd3fc853c4e3a778ea3b35c7043c5cfe9a1411cdbf9f27ceb12bee9181d",
"0x4d34c3af1c0bd64957304f8c3d5633cdcc8801a22c3c762e790adfc38023822e",
"0x67d5bb5dae7dd5c95fc44e71c762ee824a7de356b606f1828f9238a1f29e800e",
"0x84d52b0798ab1b8a901f3261f32ea12aa9603a1695fb4a65a6aa2ae08c4b6674",
"0xbe52aa614858dd18ba0cca1a7247fcd252ee5e3c0186b4c4f4bba6ed2ecf1229",
"0x38b1b56cd7512b1dd3732c6dd805ec10c8af3c032275072b09bd05add41cfec4",
"0x05be4da4ee0bea923d528a6eca8e23afc0ba94bc6b0e055b4f12ee0b4032acb3"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
