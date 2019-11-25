const db = require('../database/db-config');

module.exports = {
    get,
    getBy,
    add,
    getById
};

function get() {
    return db('users')
        .select('id', 'username')
}

function getBy(filter) {
    return db('users')
        .where(filter)
}

async function add(user) {
    const [id] = await db('users').insert(user, 'id');
    return getById(id)
}

function getById(id) {
    return db('users')
        .select('id', 'username', 'email')
        .where({ id })
        .first()
}