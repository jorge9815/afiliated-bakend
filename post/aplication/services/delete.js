const repository = require("../../infrastructure/post_repository");

const deletePost = async (id) => {
  await repository.deletePost(id);
};

module.exports = { deletePost };
