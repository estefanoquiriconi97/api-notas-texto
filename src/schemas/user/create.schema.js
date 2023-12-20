const joi = require('joi');


const createSchema = joi.object({
    email: joi.string().required().email(),
    password: joi.string().required().min(5).max(20)
});

module.exports = createSchema;