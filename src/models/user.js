import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },

  username: {
    type: String,
    unique: true,
    required: true,
  },

  password: {
    type: String,
    required: true,
  },
});

userSchema.pre('save', function process(){
  const password = this.password;
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(password, salt);

  this.password= hash;

})

userSchema.methods.comparePassword= function(password){
  return bcrypt.compareSync(password, this.password);
 
}

userSchema.methods.getJwt = function generate(){
  return jwt.sign({id : this.id, email : this.email}, 'twitter_secret', { expiresIn : '1hr'});
}


const User = mongoose.model("User", userSchema);

export default User;
