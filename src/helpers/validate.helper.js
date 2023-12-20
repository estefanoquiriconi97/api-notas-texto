const errors = require("./errors.helper.js");

const main = async (schema, data) => {
  try {
    await schema.valiteAsync(data);
  } catch (error) {
    errors.badRequestError(error.datail[0]?.message);
  }
};

module.exports = main;
