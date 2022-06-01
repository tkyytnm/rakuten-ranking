const IndexController = require("../controllers/index");
const IndexControllerInstance = new IndexController();

module.exports = (app) => {
  /**
   * @swagger
   *  /api:
   *    get:
   *      summary: Retrieve an object including a list of items from Rakuten ranking API.
   *      responses:
   *        '200': 
   *          description: A JSON object of Rakuten ranking API. Please check https://webservice.rakuten.co.jp/documentation/ichiba-item-ranking
   */
  app.get("/api", async (req, res, next) => {
    try {
      const response = await IndexControllerInstance.fetchData();
      res.send(await response.json());
    } catch (err) {
      next(err);
    }
  });
};
