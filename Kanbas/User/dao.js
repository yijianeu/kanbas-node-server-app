import model from "./model.js";
export const createUser = (user) => {}; // later
export const findAllUsers = () => model.find();
export const findUserById = (id) => model.findById(id);
export const findUserByUsername = (username) => model.findOne({ username });
export const findUserByCredentials = (username, password) => model.findOne({ username, password });
export const updateUser = (id, user) => model.updateOne({ _id: id }, { $set: user });
export const deleteUser = (id) => model.deleteOne({ _id: id });
