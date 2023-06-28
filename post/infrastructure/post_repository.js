const mongoose = require("mongoose");
const { logger } = require("../wingston_logger");

const {
  BD_DATABASE,
  DB_HOST,
  DB_PASS,
  DB_PORT,
  DB_USER,
} = require("../../conf");
const Post = require("./post_schema");

const connect = () => {
  mongoose.connect(
    `mongodb://${DB_USER}:${DB_PASS}@${DB_HOST}:${DB_PORT}/${BD_DATABASE}`
  );
  mongoose.connection.once("open", () => {
    logger.info("Conected to database");
  });
};

const create = async (post) => {
  const model = new Post(post);
  try {
    await model.save();
    logger.info(`The ${post.title} Post has be saved properly`);
  } catch (e) {
    logger.error(e.toString());
  }
};

const fidnAll = async () => {
  try {
    const data = await Post.find();
    return data;
  } catch (e) {
    console.log(e);
  }
};

module.exports = { connect, create, fidnAll };
