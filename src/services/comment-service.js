import {CommentRepository, TweetRepository } from "../repository/index.js";

export default class CommentService{

    constructor(){
        this.commentRepository = new CommentRepository();
        this.tweetRepository = new TweetRepository();
    }

    async createComment(modelId, modelType, userId, content){
        try {

            if(modelType=='Tweet'){
                var commentable = await this.tweetRepository.get(modelId);

            }
            else if(modelType=='Comment'){
                var commentable= await this.commentRepository.get(modelId);
              
            }
            else
            {
                throw new Error("Unknown model Type")
            }

            console.log("Commentable: ", modelId)


            

            var comment = await this.commentRepository.create({
                content : content,
                user : userId,
                onModel : modelType,
                commentable : modelId,
                likes : [],
                comments : []

            })

            commentable.comments.push(comment);
            await commentable.save();
            
            return comment;


        } catch (error) {
            console.log("Error in comment service layer", error)
        }
    }

    async deleteComment(data){
        try {
            
        } catch (error) {
            console.log("Error in comment service layer")
        }
    }

    async getComment(data){
        try {
            
        } catch (error) {
            console.log("Error in comment service layer")
        }
    }

     



}
