const mongoose = require("mongoose");

const hashtagSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  tweets: [
    {
      tweetId: mongoose.Types.ObjectId,
      ref: "Tweet",
    },
  ],
}, {timestamps : true});

const Hashtag = mongoose.model('Tweet', hashtagSchema)

module.exports = Hashtag;
