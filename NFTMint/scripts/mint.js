
const hre = require("hardhat");

const WALLET_ADDRESS = "0x1dFd42794eCFe2689555dDf381766ABe6A4fb112"
const CONTRACT_ADDRESS = "0x2B7f9F8e33e6C3Ad8F4a4941880a768D5c4f2834"

async function main(_URI) {
    const NFT = await hre.ethers.getContractFactory("NFTS");

    const contract = NFT.attach(CONTRACT_ADDRESS);
    await contract.safeMint(WALLET_ADDRESS).then((txn) => {
        // Log Txn
        console.log(txn.hash)
        return(txn)
    });

}
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });