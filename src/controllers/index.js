const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));
const { APP_ID } = require("../../config");

module.exports = class IndexController {
  async fetchData() {
    try {
      const response = await fetch(
        `https://app.rakuten.co.jp/services/api/IchibaItem/Ranking/20170628?format=json&applicationId=${APP_ID}`
      );
      return response;
    } catch (err) {
      throw err;
    }
  }
};
