const { contractAddress, contractABI } = require("./constants");

const createLotteryContract = web3 => {
    return new web3.eth.Contract(JSON.parse(contractABI), contractAddress);

}

export default createLotteryContract;