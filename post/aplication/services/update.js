const repository = require("../../infrastructure/post_repository");

const update = async (post) => {
  repository.update(post);
};

module.exports = { update };
