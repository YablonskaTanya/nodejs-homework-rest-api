const express = require("express");
const controllers = require("../../controllers/contacts");

const router = express.Router();

router.get("/", controllers.getAll);

router.get("/:contactId", controllers.getById);

router.post("/", controllers.addContact);

router.put("/:contactId", controllers.updateContact);

router.delete("/:contactId", controllers.deleteContact);

module.exports = router;
