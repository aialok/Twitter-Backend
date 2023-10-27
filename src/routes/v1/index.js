import express from "express";

const router = express.Router();

import { createTweet, getTweet } from "../../controller/tweet-controller.js";
import toggleLike from "../../controller/like-controller.js";
import { createComment } from "../../controller/comment-controller.js";
import { signUp , login} from "../../controller/user-controller.js";
import { authenticate } from "../../middlewares/authenticate.js";

// Tweet Routes
router.post("/tweets", authenticate, createTweet);
router.post("/likes/toggle", toggleLike);
router.get("/tweets/:id", getTweet);
router.post("/comment", createComment);

// User Routes
router.post("/signup", signUp);
router.post("/login", login);



export default router;
