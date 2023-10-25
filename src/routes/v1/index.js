import express from "express";

const router = express.Router();

import { createTweet, getTweet } from "../../controller/tweet-controller.js";
import toggleLike from "../../controller/like-controller.js";

import { createComment } from "../../controller/comment-controller.js";

router.post("/tweets", createTweet);
router.post("/likes/toggle", toggleLike);
router.get("/tweets:id", getTweet);

router.post("/comment", createComment);

export default router;
