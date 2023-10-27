import User from "../models/user.js";
import CrudRepository from "./crud-repository.js";

class UserRepository extends CrudRepository{

    constructor(){
        super(User)
    }

    async findByEmail(data){
        try {
            const user = await User.findOne({email : data.email});
            return user;
        } catch (error) {
            console.log("There is error in user repository", error);
        }
    }
    
}

export default UserRepository;