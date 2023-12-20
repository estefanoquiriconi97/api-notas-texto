const { isSchema } = require('joi');
const validateSchema = require('../../helpers/validate.helper.js');
const schema = require('../../schemas/user/create.schema.js');

const main = async (req, res, next) => {
    try {
        //Validar esquema
        await validateSchema(schema, req.body);
        //Enviar al servicio los datos

        //Responder
    } catch (error) {
        next(error);
    }
}

module.exports = main;