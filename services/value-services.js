const values = require('../models/value-model');

async function getValues() {
    const allValues = await values.getValues();

    if(!allValues) {
        return {
            statusCode: 404,
            data: {
                message: "Values not found"
            }
        }
    } else {
        return {
            statusCode: 200,
            data: {
                data: allValues
            }
        }
    }
}

module.exports = {
    getValues
}