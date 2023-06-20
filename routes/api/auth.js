const express = require("express");
const { schemas } = require("../../models/user");
const { validataBody } = require("../../middlewars");
const controllers = require("../../controllers/auth");
const router = express.Router();

router.post(
  "/register",
  validataBody(schemas.registerSchema),
  controllers.register
);

router.post("/login", validataBody(schemas.loginSchema), controllers.login);

module.exports = router;
