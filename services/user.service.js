const User = require("../models/user");

// user services

// create new user
const createNewUser = async (user) => {
  try {
    // check user is already registered
    const isUserAlreadyRegistered = await User.find({
      $or: [{ email: user.email }, { phone: user.phone }],
    });

    console.log(isUserAlreadyRegistered);

    if (isUserAlreadyRegistered.length === 0) {
      const user = await User.create(user);
      return user;
    } else {
      return { error: "User is already exist with same email or phone" };
    }
  } catch (error) {
    return { error: error.message };
  }
};

// get user by id
const getUserById = async (id) => {
  try {
    const user = await User.findOne({ _id: id });
    if (!user) {
      return { error: "User not found" };
    }
    return user;
  } catch (error) {
    return { error: error.message };
  }
};

// update user
const updateUser = async (id, userData) => {
  try {
    if (userData.email || userData.phone) {
      const isEmailOrPhoneExist = await User.findOne({
        $or: [{ email: userData.email }, { phone: userData.phone }],
      });

      if (isEmailOrPhoneExist) {
        return { error: "user already exists with email or phone" };
      } else {
        const user = await User.findByIdAndUpdate(id, userData, { new: true });

        if (!user) {
          return { error: "User not found" };
        }
        return user;
      }
    }
  } catch (error) {
    return { error: error.message };
  }
};

// delete user
const deleteUser = async (id) => {
  try {
    const user = await User.findByIdAndDelete(id);
    if (!user) {
      return { error: "User not found" };
    }
    return { message: "User deleted successfully" };
  } catch (error) {
    return { error: error.message };
  }
};

// get all user and filter user
const getUserAndFilter = async (filterData) => {
  try {
    const users = await User.find(filterData);
    return users;
  } catch (error) {
    return { error: error.message };
  }
};

module.exports = {
  createNewUser,
  getUserById,
  updateUser,
  deleteUser,
  getUserAndFilter,
};
