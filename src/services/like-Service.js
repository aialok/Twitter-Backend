import { TweetRepository, LikeRepository } from "../repository/index.js";

class LikeService {
  constructor() {
    this.likeRepository = new LikeRepository();
    this.tweetRepository = new TweetRepository();
  }

  async toggleLike(modelId, modelType, userId) {
    try {
      
      if (modelType == "Tweet") {
        var likeable = await this.tweetRepository.get(modelId);
        likeable.populate({ path: "likes" });
      } else if (modelType == "Comment") {
        // Comment Repository
      } else {
        throw new Error("unknown model type");
      }

      const exists = await this.likeRepository.findByUserAndLikeable({
        user: userId,
        onModel: modelType,
        likeable: modelId,
      });

      if (exists) {
        likeable.likes.pull(exists.id);
        await likeable.save();
        await this.likeRepository.destroy(exists.id);
        var isAdded = false;
      } else {
        const newLike = await this.likeRepository.create({
          user: userId,
          onModel: modelType,
          likeable: modelId,
        });

        likeable.likes.push(newLike);
        await likeable.save();

        var isAdded = true;
      }

      return isAdded;
    } catch (error) {
      console.log("Error in Like Services", error);
    }
  }
}

export default LikeService;
