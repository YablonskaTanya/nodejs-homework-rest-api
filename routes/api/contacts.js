const express = require("express");
const controllers = require("../../controllers/contacts");
const { validataBody, isValidId, authenticate } = require("../../middlewars");
const { schemas } = require("../../models/contact");

const router = express.Router();

router.get("/", authenticate, controllers.getAll);

router.get("/:contactId", authenticate, isValidId, controllers.getById);

router.post(
  "/",
  validataBody(schemas.addSchema),
  authenticate,
  controllers.addContact
);

router.put(
  "/:contactId",
  isValidId,
  validataBody(schemas.addSchema),
  authenticate,
  controllers.updateContact
);

router.patch(
  "/:contactId/favorite",
  isValidId,
  validataBody(schemas.updateFavoriteSchema),
  authenticate,
  controllers.updateStatusContact
);

router.delete(
  "/:contactId",
  isValidId,
  authenticate,
  controllers.deleteContact
);

module.exports = router;
