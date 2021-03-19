const TodoList = artifacts.require("TodoList");

module.exports = function(deployer) {
  deployer.deploy(TodoList);
};

// changing the state of the blockchain
// 2_ (order to run)