const userService = require("../services/user.service");

// user Controllers

const createNewUser = async (req, res) => {
  const userData = req.body;
  const data = await userService.createNewUser(userData);
  res.send(data);
};

const getUserById = async (req, res) => {
  const id = req.params.id;
  const user = await userService.getUserById(id);
  res.send(user);
};

const updateUser = async (req, res) => {
  const id = req.params.id;
  const userData = req.body;
  const user = await userService.updateUser(id, userData);
  res.send(user);
};

const deleteUser = async (req, res) => {
  const id = req.params.id;
  const user = await userService.deleteUser(id);
  res.send(user);
};

const getUserAndFilter = async (req, res) => {
  const filters = req.query;
  console.log(filters);
  const users = await userService.getUserAndFilter(filters);
  res.send(users);
};

module.exports = {
  createNewUser,
  getUserById,
  updateUser,
  deleteUser,
  getUserAndFilter,
};
