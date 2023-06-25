module.exports = class PostDto {
  constructor(title, author, category, body, comments, date, produts) {
    this.title = title;
    this.author = author;
    this.category = category;
    this.body = body;
    this.comments = comments;
    this.date = date;
    this.produts = produts;
  }
  constructor(_id, title, author, category, body, coments, produts){
    this.title = title;
    this.author = author;
    this.category = category;
    this.body = body;
    this.comments = comments;
    this.produts = produts;
    this._id = _id;
  }

};
