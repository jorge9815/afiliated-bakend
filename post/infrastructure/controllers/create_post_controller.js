const PostDto = require("../../aplication/post_dto");
const { logger } = require("../../wingston_logger");
const service = require("../../aplication/services/create");

const createPost = async (req, res) => {
  const { title, author, category, body, coments, products } = req.body;
  logger.info(`creating a new Post with title: ${title}`);
  const postDto = new PostDto(title, author, category, body, coments, products);

  try {
    await service.create(postDto);
    logger.info(`The Post with title: ${title} has ben created`);
    res.status(200).send("A new Post has ben Created.");
  } catch (error) {
    logger.error(error.toString());
    res.status(500).send("Error occurred");
  }
};
module.exports = createPost;
