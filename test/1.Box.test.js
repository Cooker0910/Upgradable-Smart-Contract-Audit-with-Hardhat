const { expect } = require('chai');
const { isCallTrace } = require('hardhat/internal/hardhat-network/stack-traces/message-trace');

let Box;
let box;

describe('Box', () => {
  beforeEach(async() =>{
    Box = await ethers.getContractFactory("Box");
    box = await Box.deploy();
    await box.deployed()
  })

  it("retrieve returns a value previously stored", async() => {
    await box.store(42)  

    expect((await box.retrieve()).toString()).to.equal('42');
  })
})