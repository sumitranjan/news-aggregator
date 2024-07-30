const axios = require("axios");

async function fetchFromNewsAPI(category = []) {
  try {
    const url = `https://newsapi.org/v2/top-headlines?category=${category}&apiKey=${process.env.NEWS_API_KEY}`;
    console.log(url);
    const response = await axios.get(url);

    return response.data.articles;
  } catch (error) {
    console.log("errors:", error);
  }
}

// Function to fetch news from all sources for given categories
async function fetchNewsForCategories(categories) {
  try {
    const fetchNewsPromises = categories.map((category) =>
      Promise.all([fetchFromNewsAPI(category)]).then(([newsFromAPI]) => [
        ...newsFromAPI,
      ])
    );

    const allNews = await Promise.all(fetchNewsPromises);

    return allNews.flat();
  } catch (error) {
    console.log("Failed to fetch news!");
    throw new Error("Failed to fetch news!");
  }
}

module.exports = { fetchNewsForCategories };
