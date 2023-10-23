import Hashtag from "../models/hashtags.js";

class HashtagRepository {
  async create(hashtag) {
    try {
      const tags = await Hashtag.insertMany(hashtag);

      return tags;
    } catch (error) {
      console.log("There is error in creating hashtags", error);
    }
  }

  async findtags(hashtags) {
    try {
      // console.log("Inside repository", hashtags)
      const tags = await Hashtag.findOne({ hashtag: hashtags }).lean();

      return tags;
    } catch (error) {
      console.log("Error in fetching hashtags", error);
    }
  }

  async updateTags(hashtags_id, data) {
    try {
      const tags = await Hashtag.findByIdAndUpdate(hashtags_id, {
        $push: { tweets: data },
      });

      return tags;
    } catch (error) {
      console.log(error);
    }
  }
}

export default HashtagRepository;
