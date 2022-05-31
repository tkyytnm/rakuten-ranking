const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");

module.exports = (app) => {
  app.use(morgan("dev"));
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  app.use(cors());
};
