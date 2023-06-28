const repository = require("../../infrastructure/post_repository");

const fidnAll = async () => {
  return await repository.fidnAll();
};

module.exports = { fidnAll };
