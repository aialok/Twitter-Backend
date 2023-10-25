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
     return res.status(200).json({
        data : {},
        success: true,
        message : "Internal server error failed to create a tweet",
        err : {error}
     })
  }
};

export const getTweet = async (req,res)=>{
   try {
      const response = await tweetService.getTweet(req.params.id);
      return res.status(201).json({
        data: response,
        success: true,
        message: "Successfully fetched a Tweet",
        err: {},
      });
   } catch (error) {
    return res.status(200).json({
      data : {},
      success: true,
      message : "Internal server error failed to fetch a tweet",
      err : {error}
   })
   }
}
