module.exports = class PostDto {
  constructor(title, author, category, body, coments, produts) {
    this.title = title;
    this.author = author;
    this.category = category;
    this.body = body;
    this.coments = coments;
    this.produts = produts;
  }
  constructor(_id, title, author, category, body, coments, produts){
    this.title = title;
    this.author = author;
    this.category = category;
    this.body = body;
    this.coments = coments;
    this.produts = produts;
    this._id = _id;
  }

};
