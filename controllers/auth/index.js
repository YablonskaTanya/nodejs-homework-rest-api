const { controllerWraper } = require("../../helpers");
const register = require("./register");
const login = require("./login");
const getCurrent = require("./getCurrent");
const logout = require("./logout");
const updateAvatar = require("./updateAvatar");

module.exports = {
  register: controllerWraper(register),
  login: controllerWraper(login),
  getCurrent: controllerWraper(getCurrent),
  logout: controllerWraper(logout),
  updateAvatar: controllerWraper(updateAvatar),
};
