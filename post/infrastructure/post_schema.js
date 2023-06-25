const mongoose = require("mongoose");
const { Schema } = mongoose;
const PostSchema = new Schema({
  title: String,
  author: String,
  category: String,
  body: String,
  comments: [{ body: String, date: Date, }],
  date: { type: Date, default: Date.now },
  produts: [{productName: String, link: String, shop: String}],
});

module.exports = mongoose.model("Post", PostSchema);