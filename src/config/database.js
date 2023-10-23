const dotenv=require('dotenv')

dotenv.config()

const mongoose = require('mongoose')

const {MONGO_DB_URI} = require('./serverConfig')
const { configDotenv } = require('dotenv')

console.log(MONGO_DB_URI)
const connect = async ()=>{
    await mongoose.connect(MONGO_DB_URI)
}

module.exports=connect;