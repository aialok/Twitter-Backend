import LikeService from "../services/like-Service.js";

const likeService= new LikeService();

const toggleLike= async (req,res)=>{

    try {   
        const response = await likeService.toggleLike(req.query.modelId, req.query.modelType, req.user.id);

        return res.status(201).json({
            data : response,
            success: true,
            message : (response?"Successfully liked the tweet":"successfully remove the like"),
            err : {}
        
        })

    } catch (error) {

        return res.status(501).json({
            data : {},
            success:false,
            message:"There is error in likeing the tweet",
            err : {error}
        })

    }

}

export default toggleLike;