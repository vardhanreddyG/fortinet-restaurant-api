const joi = require("joi");

const validations = joi.object({
	userName: joi.string().required(),
	password: joi.string().required()
});

module.exports = validations;
