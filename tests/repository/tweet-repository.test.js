import TweetRepository from "../../src/repository/tweet-repository";
import Tweet from "../../src/models/tweet";

jest.mock("../../src/models/tweet.js");

describe("create tweet test", () => {
  test("should create and return a tweet", async () => {
    const data = {
      content: "Hello World",
    };

    const spy = jest.spyOn(Tweet, "create").mockImplementation((data) => {
      return {
        ...data,
        _id: "1234",
        createdAt: Date.now(),
        updatedAt: Date.now(),
      };
    });

    const tweetRepository = new TweetRepository();

    const tweet = await tweetRepository.create(data);

    expect(spy).toBeCalled();
    expect(tweet.content).toBe(data.content);
    expect(tweet._id).toBeTruthy();
    expect(tweet.createdAt).toBeTruthy();
    expect(tweet.updatedAt).toBeTruthy();

    spy.mockRestore();
  });

  test("should not create a tweet a through an exception", async () => {
    const data = {
      content: "Testing error",
    };
    const spy = jest.spyOn(Tweet, "create").mockImplementation(() => {
      throw new Error("Testing error");
    });

    const tweetRepository = new TweetRepository();

    try {
      await tweetRepository.create(data);
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
    }

    expect(spy).toBeCalled();
    spy.mockRestore();
  });
});

describe("find tweet test", () => {
  test("get all tweet test", async () => {
    const tweetArray = [
      {
        _id: "1234",
        content: "Hello World",
        createdAt: Date.now(),
        updatedAt: Date.now(),
      },
      {
        _id: "1234",
        content: "Hello World",
        createdAt: Date.now(),
        updatedAt: Date.now(),
      },
      {
        _id: "1234",
        content: "Hello World",
        createdAt: Date.now(),
        updatedAt: Date.now(),
      },
    ];

     const findResponse = {tweetArray};
   

    const spy = jest.spyOn(Tweet, "find").mockReturnValue(findResponse);

    const tweetRepository = new TweetRepository();

    const tweet = await tweetRepository.getAll();
    console.log(tweet);

    expect(spy).toBeCalled();
    expect(tweet.tweetArray).toHaveLength(3);
  });
});
