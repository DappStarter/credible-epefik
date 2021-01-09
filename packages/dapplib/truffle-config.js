require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom nasty flip spot chat crater remain puppy grace crew food genuine'; 
let testAccounts = [
"0xf23d5373dfdd990ce90f68505b65f917b19af97b0a257d49138626b935ee1c60",
"0xd7073a2049ae56eea318c61a6b01747af24290b6629122c0a7397fcc8901dbf0",
"0x92ad2c17149639f0796490df0b9aaecc2d5c932de86f2d49948b11d572756fd8",
"0x421673c296e0cacdbf8de62af5a48236f347424cfcfe8e240719fd173351f5c2",
"0x524bb2b21374fa73539a83f26e20855e36db246d5dfe57b4f8e695a8b4725196",
"0xb2207c69cc8635e6adc8fee2709abf3f38c86fb4bcd178e0acd8218715b94428",
"0x90e830e80410e619d6af23424ce675b8697e90c0fd1ef04be06dfbf65b8333fa",
"0x01e9e9995ebaea307fa536d5aa1e86a63476dc94be2ebb51c8d43a29d8498107",
"0x34640a8c326a4cc255272a5edb56032ddcb5a6242d4f5a170b8da308836ce330",
"0x7129b4a3bdb5a6df2c52881b612d9d68e559dd415d22994d66ec689e23132abd"
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
