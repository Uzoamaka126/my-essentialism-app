const db = require('../database/db-config');

module.exports = {
    get,
    getById,
    getBy,addNewUser,
    verifyUser    
}

function get() {
    return db('users')
        .select('id', 'username', 'email')
}

function getById(id) {
    return db('users')
        .select('id', 'username', 'email')
        .where({ 'id': id })
        .first()
}

function getBy(filter) {
    return db('users')
        .select("id", "username", "isVerified", "password", "email")
        .where(filter)
        .first()
}

// Add a new user
async function addNewUser(user) {
    try {
        const ids = await db("users").insert(user);
        const id = ids[0];
        const response = await getById(id);
        return response;
    } catch (err) {
        console.log(err);
    }
} 

// verify user
async function verifyUser(id) {
    try {
        await db("users")
        .where({ id: id })
        .update({ isVerified: 1 });
        const response = await getById(id);
        return response;
    } catch (error) {
      console.log(error);
    }
} 