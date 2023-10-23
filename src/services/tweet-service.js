const {
  TweetRepository,
  HashtagRepository,
} = require("../repository/index.js");

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

    const newHashtag= [];

    for(const tag of tags){

        const existingHashtag = await this.hashtagRepository.findtags(tag);

        if(!existingHashtag){
            newHashtag.push(tag)
        }

    }

    console.log(newHashtag)

    if(newHashtag.length!=0){
        await this.hashtagRepository.create(newHashtag) 
    }

    const tweet = await this.tweetRepository.create(data);

    return newHashtag;
  }
}

module.exports = TweetService;


