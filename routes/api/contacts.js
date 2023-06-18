const express = require("express");
const controllers = require("../../controllers/contacts");
const { validataBody, isValidId } = require("../../middlewars");
const { schemas } = require("../../models/contact");

const router = express.Router();

router.get("/", controllers.getAll);

router.get("/:contactId", isValidId, controllers.getById);

router.post("/", validataBody(schemas.addSchema), controllers.addContact);

router.put(
  "/:contactId",
  isValidId,
  validataBody(schemas.addSchema),
  controllers.updateContact
);

router.patch(
  "/:contactId/favorite",
  isValidId,
  validataBody(schemas.updateFavoriteSchema),
  controllers.updateStatusContact
);
router.delete("/:contactId", isValidId, controllers.deleteContact);

module.exports = router;
