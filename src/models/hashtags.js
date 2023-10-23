const mongoose = require("mongoose");

const hashtagSchema = new mongoose.Schema(
  {
    hashtag: {
      type: String,
      required: true,
    },
    tweets: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Tweet",
      },
    ],
  },
  { timestamps: true }
);

const Hashtag = mongoose.model("Hashtag", hashtagSchema);

module.exports = Hashtag;
