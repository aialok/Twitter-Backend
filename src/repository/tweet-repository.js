import Tweet from "../models/tweet.js";
import dotenv from "dotenv";
import CrudRepository from "./crud-repository.js";
dotenv.config();
class TweetRepository extends CrudRepository {
  
    constructor(){
      super(Tweet);
    }

  async getWithComments(id) {
    try {
      const tweet = await Tweet.findById(id)
        .populate({ path: "comments" })
        .lean();
      return tweet;
    } catch (error) {
      console.log("Error in repository layer", error);
    }
  }


  async getAll(offset, limit) {
    try {
      const tweet = await Tweet.find().limit(limit).lean().skip(offset);
      return tweet;
    } catch (error) {
      console.log("Error in repository layer", error);
    }
  }
}

export default TweetRepository;
