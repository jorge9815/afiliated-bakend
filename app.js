const express = require("express");
const { logger } = require("./post/wingston_logger");
const { APP_PORT } = require("./conf");
const service = require("./post/aplication/services/connect");
const routes = require("./routes/post");

const app = express();
app.use(express.json());

app.listen(APP_PORT, function () {
  logger.info(`App is runing on port ${APP_PORT}`);
  service.make_conection();
});

app.use(routes);
