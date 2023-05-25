const BoozedHug = artifacts.require('BoozedHug');

module.exports = function (deployer, network, accounts) {
    deployer.deploy(BoozedHug);
};
