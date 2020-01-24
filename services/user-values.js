const userValues = require('../models/value-model');

async function addValues(values) {
    const newValues = await userValues.addUserValues(values);
        return newValues;
}

async function getValues(id) {
    const values = await userValues.getUserValues(id);

    if(!values) {
        return { statusCode: 404, data: { message: "No values found", values } };
    } else {
      return { statusCode: 200, data: { values } };
    }
}

module.exports = {
    addValues,
    getValues
}