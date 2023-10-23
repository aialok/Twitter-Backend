const express = require("express");
const connect = require("./config/database");


//Importing modules

const TweetService = require("./services/tweet-service")

const tweetService =  new TweetService();



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


      app.get('/', async(req,res)=>{

        const createTweet = await  tweetService.create({content : "Exploring a beautiful #beach #sunset #Dusk #wordl #viratkohli #india #pakistan"})

        // console.log(createTweet);

        return res.json({
          data : createTweet
        })

      })





  });
};

serverSetupandStart();
