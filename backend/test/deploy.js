const hre = require("hardhat");
const { expect } = require("chai");

describe("NFT Collection Deployment", function () {
  it("Should deploy the NFT Contract", async function () {
    const [owner, user1] = await hre.ethers.getSigners();

    const NFT = await ethers.getContractFactory("Buidl_NFT");
    const nft = await NFT.deploy("BuidlNFT", "BN");
    await nft.deployed().then((val) => {
      console.log("NFT Contract Deployed");
      console.log("Contract Address: " + val.address);
    });

    expect(await nft.name()).to.equal("BuidlNFT");
    expect(await nft.symbol()).to.equal("BN");
  });

  it("Should not deploy the NFT Contract", async function () {
    const [owner, user1] = await hre.ethers.getSigners();

    const NFT = await ethers.getContractFactory("Buidl_NFT");
    expect(NFT.deploy("BuidlNFT")).to.be.revertedWith("ERROR");
  });
});