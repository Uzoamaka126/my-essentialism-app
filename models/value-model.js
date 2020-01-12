const db = require('../database/db-config');
const userModel = require('./users-models');

module.exports = {
    getValues,
    getById,
    getByUserId,
    getBy,
    addValue,
    getUserValues,
    addUserValue
}

function getValues() {
    return db('values')
        .select('id', 'value_name')
}

function getById(id) {
    return db('values')
        .select('id', 'value_name')
        .where({ id })
        .first()
}

function getByUserId(id) {
    return db('users')
        .select('id')
        .where({ id })
        .first()
}

function getBy(filter) {
    return db('values')
        .where(filter)
}

function addValue(value) {
    return db('values')
        .insert(value)
        .then((ids => {
            return getById(ids[0]);
        }));
}

function addUserValue(value, userId) {
    return db('users_and_values as uv')
        .insert(value, 'id')
        .select('users as u', 'uv.user_id', 'uv.value_id')
        .select('values as v')
        .where({ 'u.id': userId })
        .then((ids => {
            return getByUserId(ids[0]);
        }));
}

function getUserValues(userId) {
    return db('users_and_values as uv')
        .join('users as u', 'u.id', 'uv.user_id')
        .join('values as v', 'v.id', 'uv.value_id')
        .select('v.id', 'u.id', 'v.value_name', 'u.username')
        .where({ 'u.id': userId })
}