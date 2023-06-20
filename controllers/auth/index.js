const { controllerWraper } = require("../../helpers");
const register = require("./register");
const login = require("./login");

module.exports = {
  register: controllerWraper(register),
  login: controllerWraper(login),
};
