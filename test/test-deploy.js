const { ethers } = require("hardhat")
const { expect, assert } = require("chai")
// First we want to write a basic test for our SimpleStorage Contract
describe("SimpleStorage", function () {
    let simpleStorageFactory, simpleStorage
    beforeEach(async function () {
        simpleStorageFactory = await ethers.getContractFactory("SimpleStorage")

        simpleStorage = await simpleStorageFactory.deploy()
    })

    it("It should start with a favorite number of 0", async function () {
        const currentValue = await simpleStorage.retrieve()
        const expectedValue = "0"

        // currentValue.toString() --> remember that javascript dosent do well with numbers so it will return Big number
        assert.equal(currentValue.toString(), expectedValue)
    })

    it("It shold update when we call store", async function () {
        const expectedValue = "7"
        const transactionResponse = await simpleStorage.store(expectedValue)
        await transactionResponse.wait(1)

        const currentValue = await simpleStorage.retrieve()
        assert.equal(currentValue.toString(), expectedValue)
        // expect(currentValue.toString()).to.equal(expectedValue) // This is just another way insted of `assert`
    })

    //it.only means that when we run --> yarn hardhat test, it will only run this test when the one specific with `only`
    // it.only("It shold update when we call store", async function () {
    //     const expectedValue = "7"
    //     const transactionResponse = await simpleStorage.store(expectedValue)
    //     await transactionResponse.wait(1)

    //     const currentValue = await simpleStorage.retrieve()
    //     assert.equal(currentValue.toString(), expectedValue)
    // })
})
