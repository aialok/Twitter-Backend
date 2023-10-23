const Tweet = require('../models/tweet')
const dotenv=require('dotenv')
dotenv.config()
class TweetRepository{
     
    async create(data){
        try {
            const tweet = await Tweet.create(data);
            return tweet;
        } catch (error) {
            console.log("Error in repository layer", error)
        }
    }
  
    async get(id){
        try {
            const tweet = await Tweet.findById(id).populate({path : 'comments'}).lean();
            return tweet;
            
        } catch (error){
            console.log("Error in repository layer", error)
        }
    }

    async update(id,data){
        try {
            const response = await Tweet.findByIdAndUpdate(id, data)
            return response;
        } catch (error) {
            console.log("Error in repository layer", error) 
        }
    }

    async destroy(id){
        try {
            const response = await Tweet.findByIdAndDelete(id)
            return response;
        } catch (error) {
            console.log("Error in repository layer", error)
        }
    }

    async getAll(offset, limit){
        try {
            const tweet = await Tweet.find().limit(limit).lean().skip(offset)
            return tweet;   
        } catch (error) {
            console.log("Error in repository layer", error)
        }
    }

}


module.exports= TweetRepository;

