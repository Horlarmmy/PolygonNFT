# NFT Mint

Deploy, mint and verify an NFT contract on polygon blockchain
## Minted NFT

The verified contract can be found [here](https://mumbai.polygonscan.com/address/0x2b7f9f8e33e6c3ad8f4a4941880a768d5c4f2834)

## How to run

- Clone the repo to your machine
- Create an account on [MATIC RPC](https://rpc.maticvigil.com/), create a new proect and copy your app id
- Create an account on [polygonscan](https://polygonscan.com/register) and create a new apikey
- Create a `secret.json` file with the following content:
```
 {
	"APP_ID": "Your appId",
	"PRIVATE_KEY1": "Your mumbai testnet account private key",
	"PRIVATE_KEY2": "Another mumbai testnet account private key",
	"POLYGONSCAN_API_KEY": "Your api key"
}
```


- Run the following commands
```
npm install
npx hardhat compile
npx hardhat run scripts/deploy.js
```

- Scan the address on mumbai testnet
- To mint your own NFT
Change the CONTRACT ADDRESS and WALLET ADDRESS to your preferred

> npx hardhat run scripts/mint.js

- To verify your contract

> npx hardhat verify $DEPLOYED_ADDRESS

**(c) Horlarmmy**

