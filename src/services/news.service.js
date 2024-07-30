const { users } = require("../data/in-memory-data");
const { fetchNewsForCategories } = require("../utils/fetchNews");

async function getNewsService(userId) {
  try {
    const user = users.find((user) => user.userId === userId);
    const preferences = user.preferences;
    const news = await fetchNewsForCategories(preferences);
    return {
      news,
    };
  } catch (error) {
    return {
      message: "Something went wrong",
      status: 500,
    };
  }
}

module.exports = { getNewsService };
