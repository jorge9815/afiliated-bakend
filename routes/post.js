const express = require("express");
const router = express.Router();

const create = require("../post/infrastructure/controllers/create_post_controller");
const findAll = require("../post/infrastructure/controllers/find_all_post_controller");
const deletePost = require("../post/infrastructure/controllers/delete_post_controller");

router.get("/", findAll);

// router.get("/:productID", getProduct);

router.post("/post", create);

// router.put("/:productID", updateProduct);

router.delete("/post", deletePost);

module.exports = router;
