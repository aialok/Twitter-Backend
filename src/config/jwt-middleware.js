import JWT from "passport-jwt";

import User from "../models/user.js";
import dotenv from "dotenv";
dotenv.config();

const jwtStrategy = JWT.Strategy;

const opts = {
  jwtFromRequest: JWT.ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: "twitter_secret",
};

const passportAuth = (passport) => {
  try {
    console.log("passport start");
    passport.use(
      new jwtStrategy(opts, async function (jwt_payload, done) {
        const user = await User.findById(jwt_payload.id);
        if (user) {
          done(null, user);
        } else {
          done(null, false);
        }
      })
    );
    console.log("end");
  } catch (error) {
    console.log("There is error in passport auth", error);
  }
};

export default passportAuth;
