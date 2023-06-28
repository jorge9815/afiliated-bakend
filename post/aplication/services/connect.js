const repository = require("../../infrastructure/post_repository");

const make_conection = () => {
    repository.connect()
};

module.exports = { make_conection };
