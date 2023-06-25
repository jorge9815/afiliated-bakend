const app = require("../../../app");
const { logger } = require("../../wingston_logger");

app.post("/", async (req, res) => {
  logger.info(`creating a new Post ${req.body.title}`);
  const post = {
    title: title,
    author: author,
    category: category,
    body: body,
    comments: comments,
    date: date,
    produts: produts,
  };

  try {
    await repository.create(post);
    console.log(`A new Post has ben Created`);
    res.status(200).send("A new Post has ben Created.");
  } catch (error) {
    console.log(error);
    res.status(500).send("Error occurred");
  }
});
