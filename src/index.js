import express from "express";
import connect from "./config/database.js";
import apiRoutes from './routes/index.js'
import bodyParser from "body-parser";



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

      
  });
};

serverSetupandStart();
