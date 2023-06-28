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

const deletePost = async (id) => {
  try {
    await Post.deleteOne({ _id: id });
    logger.info(`The Post with ID: ${id} has been deleted.`);
  } catch (e) {
    logger.error(`Field to delete post with error: ${e.toString()}`);
    console.log(e);
  }
};

const update = async (post) => {
  try {
    Post.updatepdateOne(
      { _id: `${post.id}` },
      {
        title: post.title,
        author: post.author,
        category: post.category,
        body: post.body,
        comments: post.comments,
        produts: post.produts,
        date: post.date,
      }
    );
  } catch (e) {
    console.log(e);
  }
};

module.exports = { connect, create, fidnAll, deletePost, update };
