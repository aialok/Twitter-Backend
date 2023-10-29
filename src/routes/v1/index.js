import express from "express";

const router = express.Router();

import { createTweet, getTweet ,getTweetByUserId } from "../../controller/tweet-controller.js";
import toggleLike from "../../controller/like-controller.js";
import { createComment } from "../../controller/comment-controller.js";
import { signUp , login} from "../../controller/user-controller.js";
import { authenticate } from "../../middlewares/authenticate.js";

import upload from "../../config/s3-config.js";

const singleUploader = upload.array('image', 3);

const uploadImage = async (req,res, next)=>{
    singleUploader(req,res, function(err,data){
        console.log(data);
        if(err){
          return res.status(401).json({
              error : {err}
          })
        }
        
        console.log("image url is ", req.files);
        next();
    })
}


// Tweet Routes
router.post("/tweets", uploadImage,  createTweet);
router.post("/likes/toggle", toggleLike);
router.get("/tweets/:id", getTweet);
router.post("/comment", authenticate,createComment);
router.get("/tweets", authenticate, getTweetByUserId);

// User Routes
router.post("/signup", signUp);
router.post("/login", login);



export default router;
