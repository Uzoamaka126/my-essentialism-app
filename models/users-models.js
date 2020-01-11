const db = require('../database/db-config');

module.exports = {
    get,
    getById,
    getBy    
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
        .where(filter)
}