import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();
// import MONGO_DB_URI from './serverConfig.js'


const connect = async () => {
  await mongoose.connect(process.env.MONGO_DB_URI);
};

export default connect;
