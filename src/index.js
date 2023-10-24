import express from "express";
import connect from "./config/database.js";
import apiRoutes from './routes/index.js'
import bodyParser from "body-parser";
import {UserRepository, TweetRepository, LikeRepository} from './repository/index.js'
import LikeService from './services/like-Service.js'

const likeService = new LikeService();



//Instances
const app = express();
const PORT = process.env.PORT

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

app.use('/api', apiRoutes);
    


const serverSetupandStart = async () => {
  app.listen(PORT, async (req, res) => {
    console.log(`server started on port ${PORT}`);

    connect()
      .then(() => {
        console.log("MongoDB is connected successfully");
      })
      .catch((err) => {
        console.log(err);
      });


      // const userRepo = new UserRepository();

      // const createUser = await userRepo.create({
      //     email : "alok@micorsoft.com",
      //     username : "aialok4",
      //     password : "google.com"
      // })

      // console.log("User Created: ", createUser);

     
      
      

      const createLike = await likeService.toggleLike('65367ac9e69ac4e11e9cded3', 'Tweet', '65377326034f8869e80ec3d7');

      console.log(createLike);

      const likeRepository = new LikeRepository()

      const findLike = await likeRepository.getAll({});
      console.log(findLike);



      
      
      
  });
};

serverSetupandStart();
