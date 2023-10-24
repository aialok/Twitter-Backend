import Like from "../models/like.js";
import CrudRepository from "./crud-repository.js";

class LikeRepository extends CrudRepository{

    constructor(){
        super(Like);
    }

    async findByUserAndLikeable(data)
    {
        try {
            const like = await Like.findOne(data).populate({path : 'likeable'});
            return like;
        } catch (error) {
            
        }
    }

}

export default LikeRepository;