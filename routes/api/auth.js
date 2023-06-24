const express = require("express");
const { schemas } = require("../../models/user");
const { validataBody, authenticate, upload } = require("../../middlewars");
const controllers = require("../../controllers/auth");
const router = express.Router();

router.post(
  "/register",
  validataBody(schemas.registerSchema),
  controllers.register
);

router.post("/login", validataBody(schemas.loginSchema), controllers.login);

router.get("/current", authenticate, controllers.getCurrent);

router.post("/logout", authenticate, controllers.logout);

router.patch(
  "/avatars",
  authenticate,
  upload.single("avatar"),
  controllers.updateAvatar
);

module.exports = router;
