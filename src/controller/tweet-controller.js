import TweetService from "../services/tweet-service.js";

const tweetService = new TweetService();

export const createTweet = async (req, res) => {
  try {
    const response = await tweetService.create(req.body);
    return res.status(201).json({
      data: response,
      success: true,
      message: "Successfully Created a Tweet",
      err: {},
    });
  } catch (error) {
    console.log("There is error in controller", error);
  }
};
