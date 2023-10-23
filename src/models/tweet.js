import mongoose from "mongoose";

const tweetSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
      max : [250, 'Tweet cannot be more than 250 characters']
    },
    hashtags: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Hashtag",
      },
    ],
  },
  { timestamps: true }
);

// tweetSchema.set("toObject", { virtuals: true });
// tweetSchema.set("toJSON", { virtuals: true });

// tweetSchema.pre("save", function (next) {
//   console.log("Before saving Hooks");
//   this.content = this.content + "adding between the middleware";
//   next();
// });

// tweetSchema.post('find', function post(next){
//     console.log("After saving hooks")
//     next()
// })

// tweetSchema.virtual('connect').get(function (){
//     return `Hey this is Alok ${this.content}`;
// })

const Tweet = mongoose.model("Tweet", tweetSchema);

export default Tweet
