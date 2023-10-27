import UserServices from "../services/user-services.js";

const userService = new UserServices();

export const signUp = async (req, res) => {
  try {
    const response = await userService.signUp(req.body);
    return res.status(201).json({
      data: response,
      success: true,
      message: "Successfully Created a User",
      err: {},
    });
  } catch (error) {
    return res.status(200).json({
      data: {},
      success: true,
      message: "Internal server error failed to create a user",
      err: { error },
    });
  }
}


export const login = async(req,res)=>{

    try {

        const token = await userService.login(req.body);

        if(!token){
            throw {
                message : "User not found",
                error : {error : "User not found"}
            }
        }

        return res.status(200).json({
          success : true,
          data : token,
          message : "Login into the system",
          error : {}
        })


    } catch (error) {
      return res.status(200).json({
        data: {},
        success: true,
        message: "Internal server error failed to login a user",
        err: { error },
      }); 
    }

}


