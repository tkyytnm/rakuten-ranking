const IndexController = require("../controllers/index");
const IndexControllerInstance = new IndexController();

module.exports = (app) => {
  app.get("/api", async (req, res, next) => {
    try {
      const response = await IndexControllerInstance.fetchData();
      res.send(await response.json());
    } catch (err) {
      next(err);
    }
  });
};
