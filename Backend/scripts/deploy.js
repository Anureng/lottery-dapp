
const hre = require("hardhat");

async function main() {

    const Lottery = await hre.ethers.getContractFactory("Lottery");
    const lottery = await Lottery.deploy();

    await lottery.deployed();

    console.log(
        `Lock with 1 ETH deployed to ${lottery.address}`
    );

    // console.log(toDoList);
}


main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});


// deployed to :-  0x05B4110b16A34bdb23DEfb8C401e95572c23BA0B
