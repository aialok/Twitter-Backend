import passport from "passport";

export async function authenticate(req, res, next) {
  try {
    passport.authenticate("jwt", (err, user) => {
      
      if (err || !user) {
        return res.status(401).json({
          success: false,
          message: "Unauthorized",
          error: {err},
        });
      }
      req.user = user;
      console.log("user", req.user);

      next();
    })(req, res, next);
  } catch (error) {
    console.log("There is error in authenticate", error);
  }
}
