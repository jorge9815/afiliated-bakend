const { logger } = require("../../wingston_logger");
const service = require("../../aplication/services/delete");

const deletePost = async (req, res) => {
  logger.info("Deleting Post");
  await service.deletePost(req.query.id);
  res.status(200).send("A Post has ben Deleted.");
};

module.exports = deletePost;
