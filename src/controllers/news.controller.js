const { getNewsService } = require("../services/news.service");

async function getNews(req, res) {
  //   console.log(req);
  try {
    const { news } = await getNewsService(req.userId);
    res.status(200).json({ news: news });
  } catch (error) {
    res.json({
      message: "Something went wrong : " + error,
      status: 500,
    });
  }
}

module.exports = { getNews };
