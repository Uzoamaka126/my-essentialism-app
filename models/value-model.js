const db = require('../database/db-config');

function getValues() {
    return db('values')
        .select('id', 'value_name')
}

// function getById(id) {
//     return db('values')
//         .select('id', 'value_name')
//         .where({ id })
//         .first()
// }

// function getByUserId(id) {
//     return db('users')
//         .select('id')
//         .where({ id })
//         .first()
// }

// function getBy(filter) {
//     return db('values')
//         .where(filter)
// }

// function addUserValue(value, userId) {
//     return db('users_and_values as uv')
//         .insert(value, 'id')
//         .select('users as u', 'uv.user_id', 'u.id')
//         .select('values as v', 'uv.value_id')
//         .where({ 'u.id': userId })
//         .then((ids => {
//             return getByUserId(ids[0]);
//         }));
// }

// function getUserValues(userId) {
//     return db('users_and_values as uv')
//         .join('users as u', 'u.id', 'uv.user_id')
//         .join('values as v', 'v.id', 'uv.value_id')
//         .select('v.id', 'u.id', 'v.value_name', 'u.fullname')
//         .where({ 'u.id': userId })
// }

async function addUserValues(values) {
    try {
        const [id] = await db('users_values').insert(values, "id")
        const response = await getUsersIdByValues(id);
        return response;
    } catch (error) {
        console.log(error);
    }
}
async function getUsersIdByValues(id) {
    try {
        const response = await db("users_values")
            .where({ id: id })
            .first()
            return response;
    } catch(error) {
        console.log(error);
    }
}

// Array list of all user values
async function getUserValues() {
    try {
        const values = await db('users_values')
            .select("id", "name", "userId")
            return values;
    } catch (error) {
        console.log(error)
    }
}


module.exports = {
    getValues,
    getUsersIdByValues,
    getUserValues,
    addUserValues
}