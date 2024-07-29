const Joi = require("joi");

// Schema for user registration
const userRegisterSchema = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required(),
  email: Joi.string().email().required(),
  preferences: Joi.array().items(Joi.string()).optional(),
});

// Schema for login
const userLoginSchema = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required(),
});

// Schema for updating user preferences
const updatePreferencesSchema = Joi.object({
  preferences: Joi.array().items(Joi.string()).required(),
});

module.exports = {
  userRegisterSchema,
  userLoginSchema,
  updatePreferencesSchema,
};
