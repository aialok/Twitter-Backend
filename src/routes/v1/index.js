import express from 'express'

const router = express.Router();

import { createTweet} from '../../controller/tweet-controller.js'
import toggleLike from '../../controller/like-controller.js';

router.post("/tweets", createTweet);
router.post('/likes/toggle', toggleLike )

export default router;

