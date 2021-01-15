const express = require("express");
const router = express.Router();
const axios = require("axios").default;
const cheerio = require("cheerio");

router.get("/", (req, res) => {
  const url = "http://nbastream.tv/utah-jazz-live-stream/";

  axios
    .get(url)
    .then((body) => {
      console.log("[axios] - request received");
      // initiate cheerio to grab link from nbastreams.tv
      const $ = cheerio.load(body.data);
      const link = $(".videoWrapper iframe").attr("src");
      res.render("index", { title: "Utah Jazz", link: link });
    })
    .catch((error) => console.log(error));
});

module.exports = router;
