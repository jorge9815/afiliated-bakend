module.exports = class PostDto {
  constructor(title, author, category, body, comments, produts) {
    this.title = title;
    this.author = author;
    this.category = category;
    this.body = body;
    this.comments = comments;
    this.produts = produts;
    this.date = new Date();
  }
  fromModel(_id, title, author, category, body, comments, produts, date) {
    this.title = title;
    this.author = author;
    this.category = category;
    this.body = body;
    this.comments = comments;
    this.produts = produts;
    this._id = _id;
    this.date = date;
  }
};
