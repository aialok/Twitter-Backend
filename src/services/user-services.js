import { UserRepository } from "../repository/index.js";

export default class UserServices {
  constructor() {
    this.userRepository = new UserRepository();
  }

  async signUp(data) {
    try {
      const user = await this.userRepository.create(data);
      return user;
    } catch (error) {
      console.log("There is error in user services", error);
    }
  }

  async findByEmail(data) {
    try {
      const user = await this.userRepository.findByEmail(data);
      return user;
    } catch (error) {
      console.log("There is error in user services", error);
    }
  }

  async deleteUser(userId) {
    try {
      const user = await this.userRepository.destroy(userId);
      return user;
    } catch (error) {
      console.log("There is error in user services", error);
    }
  }

  async updateUser(userId, data) {
    try {
      const user = await this.userRepository.update(userId, data);
      return user;
    } catch (error) {
      console.log("There is error in user services", error);
    }
  }

  async getAllUsers() {
    try {
      const user = await this.userRepository.getAll();
      return user;
    } catch (error) {
      console.log("There is error in user services", error);
    }
  }

  async login(data) {
    try {
      const user = await this.findByEmail(data);

      if (!user) {
        throw {
          message: "User not found",
          error: { error: "User not found" },
        };
      }

      const matchPassword = user.comparePassword(data.password);

      if (!matchPassword) {
        return res.status(401).json({
          success: false,
          message: "Invalid passoword",
          error: { error: "Invalid password" },
        });
      }

      const token = user.getJwt();

      return token;
    } catch (error) {
      console.log("There is error in user services", error);
    }
  }
}
