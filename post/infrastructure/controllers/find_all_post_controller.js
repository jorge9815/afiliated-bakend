const { logger } = require("../../wingston_logger");
const service = require("../../aplication/services/find_all");

const getPosts = async (_, res) => {
  const resData = await service.fidnAll();
  res.send(resData);
  logger.info("Showing all available posts");
};

module.exports = getPosts;
