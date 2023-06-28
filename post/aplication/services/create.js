const repository = require("../../infrastructure/post_repository");

const create = (postDto) => {
  repository.create(postDto);
};

module.exports = { create };
