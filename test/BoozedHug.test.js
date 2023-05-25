const BoozedHug = artifacts.require('BoozedHug');
const truffleAssert = require('truffle-assertions');

contract('BoozedHug', (accounts) => {
    it('should mint NFT to a specific account', async () => {
        const boozedHugInstance = await BoozedHug.deployed();
        const txResult = await boozedHugInstance.safeMint(accounts[1], 'boozed_hug-0.json');
        // assert.equal(txResult.logs[0].args.from, '0x0000000000000000000000000000000000000000', 'From is not the Zero address');
        // assert.equal(txResult.logs[0].event, 'Transfer', 'Event is not the Transfer event');
        truffleAssert.eventEmitted(
            txResult,
            'Transfer',
            {
                from: '0x0000000000000000000000000000000000000000',
                to: accounts[1],
                tokenId: web3.utils.toBN('0')
            }
        );
        const nftOwner = await boozedHugInstance.ownerOf(0);
        assert.equal(accounts[1], nftOwner, 'Owner of token 1 is not equal to account@1');
    });
});
