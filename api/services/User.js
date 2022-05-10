const { UserModel } = require("../models/Users")

class UserServices {
  async register(data) {
    try {
      const response = await UserModel(data).save()
      return {
        error: false,
        response,
      }
    } catch (error) {
      return {
        error: true,
        response: error,
      }
    }
  }

  async updateUser(id, data) {
    try {
      const options = {
        new: true,
        runValidators: true,
      }
      const response = await UserModel.findByIdAndUpdate(id, data, options)

      return {
        error: false,
        response,
      }
    } catch (error) {
      return {
        error: true,
        response: error,
      }
    }
  }

  async updateAdmin(id, adminData) {
    try {
      const response = await UserModel.findByIdAndUpdate(id, adminData, {
        new: true,
      })
      return {
        error: false,
        response,
      }
    } catch (error) {
      return {
        error: true,
        response: error,
      }
    }
  }

  async deleteUser(id) {
    try {
      await UserModel.findByIdAndDelete(id)
      return {
        error: false,
      }
    } catch (error) {
      return {
        error: true,
        response: error,
      }
    }
  }

  async getUsers() {
    try {
      const response = await UserModel.find()

      return {
        error: false,
        response,
      }
    } catch (error) {
      return {
        error: true,
        response: error,
      }
    }
  }
}

module.exports = UserServices
