import{ TweetRepository , HashtagRepository} from "../repository/index.js";

class TweetService {
  constructor() {
    this.tweetRepository = new TweetRepository();
    this.hashtagRepository = new HashtagRepository();
  }

  async create(data) {
    const content = data.content;
    var regex = /#\w+/g;
    let tags = content.match(regex);
    tags = tags.map((tag) => tag.substring(1));

    const newHashtag = [];

    const tweet = await this.tweetRepository.create(data);

    for (const tag of tags) {
      const existingHashtag = await this.hashtagRepository.findtags(tag);

      // console.log(existingHashtag )

      if (!existingHashtag) {
        newHashtag.push({
          hashtag: tag,
          tweets: tweet.id,
        });
      } else {
        const updateTags = await this.hashtagRepository.updateTags(
          existingHashtag._id,
          tweet._id
        );
      }
    }

    console.log(newHashtag);
    if (newHashtag.length != 0) {
      await this.hashtagRepository.create(newHashtag);
    }

    const response = {
        data: tweet,
        success: "True",
        err : {}
    }

    return response
  }
}

export default TweetService;
