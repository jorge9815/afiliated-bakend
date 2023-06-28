const { logger } = require("../../wingston_logger");
const service = require("../../aplication/services/update");
const Dto = require("../../aplication/post_dto");

const updatePost = async (req, res) => {
  const post = {
    id: req.body.id,
    title: req.body.title,
    author: req.body.author,
    category: req.body.category,
    body: req.body.body,
    comments: req.body.comments,
    produts: req.body.produts,
    date: req.date.date,
  };
  await service.update(post);
};
