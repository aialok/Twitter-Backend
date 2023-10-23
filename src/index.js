const express = require("express");
const connect = require("./config/database");

const TweetRepository = require("./repository/tweet-repository");
const Comment= require('./models/comment')

const Tweet = new TweetRepository();

const {PORT} = require('./config/serverConfig')
console.log(PORT)


const app = express();

// const Tweet = require("./models/tweet");

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
  });

  // const tweet = await Tweet.create({
  //   content : "This is my first tweet",
  //   userEmail : "alok@google.com"
  // })
  // console.log(tweet)

  // const fetchTweet = await Tweet.get('6534120897be3031df3d2112')
  // console.log(fetchTweet) 



};

serverSetupandStart();
