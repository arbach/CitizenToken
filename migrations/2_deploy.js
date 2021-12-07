const CitizenToken = artifacts.require("CitizenToken");

module.exports = async function (deployer) {
  deployer.deploy(CitizenToken);
};
