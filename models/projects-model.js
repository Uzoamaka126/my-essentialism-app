const db = require('../database/db-config');

module.exports = {
    get,
    getSingleProject,
    getByUserId,
    addSingleProject
}

function get(userId) {
    return db('users_and_projects')
    .join('users as u', 'u.id', 'up.user_id')
    .select('u.id', 'up.project_name', 'up.project_description')
    .where({ 'u,id': userId })}

function getSingleProject(userId) {
    return db('users_and_projects as up')
        .join('users as u', 'u.id', 'up.user_id')
        .select('u.id', 'up.project_name', 'up.project_description')
        .where({ 'u,id': userId })
}

function getByUserId(id) {
    return db('users')
        .select('id')
        .where({ id })
        .first()
}

function addSingleProject(project, userId) {
    return db('users_and_projects as up')
        .insert(project, 'id')
        .select('users as u', 'up.user_id', 'u.id')
        .where({ 'u.id': userId })
        .then((ids => {
            return getByUserId(ids[0]);
        }))
}