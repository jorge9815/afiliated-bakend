const mongoose = require("mongoose");
const Logger = require("../wingston_logger")

const {BD_DATABASE, DB_HOST, DB_PASS,DB_PORT, DB_USER} = require("../../conf");
const { Logger } = require("winston");

const connect = () => {
    mongoose.connect(
      `mongodb://${DB_USER}:${DB_PASS}@${DB_HOST}:${DB_PORT}/${BD_DATABASE}`
    );
    mongoose.connection.once("open", () => {
      console.log("conected");
    });
  };

  module.exports = {connect}