const { Hashtag } = require("../models/index");

class HashtagRepository {
  async create(hashtag) {
    try {
      const tags = await hashtag.map(async (tag) => {
        tag = await Hashtag.create({ hashtag: tag });
        return tag;
      });

      return tags;
    } catch (error) {
      console.log("There is error in creating hashtags", error);
    }
  }

  async findtags(hashtags) {
    try {
        // console.log("Inside repository", hashtags)
      const tags = await Hashtag.findOne( {hashtag :hashtags}).lean();

      return tags;
    
    } catch (error) {
      console.log("Error in fetching hashtags", error);
    }
  }
}

module.exports = HashtagRepository;
