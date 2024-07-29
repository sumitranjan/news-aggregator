const express = require("express");
const { createUser, loginUser } = require("../controllers/users.controller");
const { validateUser } = require("../middlewares/validateUser.middleware");
const { validate } = require("../middlewares/validateMiddleware");
const {
  getUserPreferences,
  updateUserPreferences,
} = require("../controllers/preference.controller");
const {
  updatePreferencesSchema,
  userRegisterSchema,
  userLoginSchema,
} = require("../validators/users.validator");

const router = express.Router();

router.post("/signup", validate(userRegisterSchema), createUser);
router.post("/login", validate(userLoginSchema), loginUser);
router.get("/preferences", validateUser, getUserPreferences);
router.post(
  "/preferences",
  validate(updatePreferencesSchema),
  validateUser,
  updateUserPreferences
);

module.exports = router;
