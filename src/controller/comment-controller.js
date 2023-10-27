import CommentService from "../services/comment-service.js";

const commentService = new CommentService();

export const createComment = async (req,res)=>{

    try {   
        const response = await commentService.createComment(req.query.modelId, req.query.modelType, req.user.id, req.body.content);

        return res.status(201).json({
            data : response,
            success: true,
            message : "Successfully created comment",
            err : {}
        
        })

    } catch (error) {

        return res.status(501).json({
            data : {},
            success:false,
            message:"There is error in commenting the tweet",
            err : {error}
        })

    }

}