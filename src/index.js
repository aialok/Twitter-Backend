import express from "express";
import connect from "./config/database.js";

import TweetService from "./services/tweet-service.js";

//Instances
const tweetService = new TweetService();
const app = express();
const PORT = process.env.PORT
const serverSetupandStart = async () => {
  app.listen(PORT, async (req, res) => {
    console.log(`server started on port ${PORT}`);

    connect()
      .then(() => {
        console.log("MongoDB is connected successfully");
      })
      .catch((err) => {
        console.log(err);
      });

    app.get("/", async (req, res) => {
      const createTweet = await tweetService.create({
        content:
          "This tweet is for checking #checking #india #pakistan #beach #beach",
        tweets: [],
      });

      return res.json({
        data: createTweet,
      });
    });
  });
};

serverSetupandStart();
