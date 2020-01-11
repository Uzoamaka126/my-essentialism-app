const db = require('../database/db-config');

module.exports = {
    getUserProjects,
    getUserValueProjects,
    getSingleProject,
    getByUserId,
    addSingleProject
}

// Model for getting projects per user
function getUserProjects(userId) {
    return db('users_values_and_projects as uvp')
        .join('users as u', 'u.id', 'uvp.user_id')
        .select('u.id', 'uvp.project_name', 'uvp.project_description')
        .where({ 'u.id': userId })
}
// Model for getting projects per value
function getUserValueProjects(userId, valueId) {
    return db('users_values_and_projects as uvp')
        .join('users as u', 'u.id', 'uvp.user_id')
        .join('values as v', 'v.id', 'uvp.value_id')
        .select('u.id', 'v.id', 'uvp.project_name', 'uvp.project_description')
        .where({ 'u.id': userId } && { 'v.id': valueId })
}

function getSingleProject(userId) {
    return db('users_values_and_projects as uvp')
        .join('users as u', 'u.id', 'uvp.user_id')
        .join('values as v', 'v.id', 'uvp.value_id')
        .select('u.id', 'v.id', 'uvp.project_name', 'uvp.project_description')
        .where({ 'u,id': userId })
}

function getByUserId(id) {
    return db('users')
        .select('id')
        .where({ id })
        .first()
}

function getByUserAndValueId(id) {
    return db('users')
        .select('id')
        .where({ id })
        .first()
}

function addSingleProject(project, userId, valueId) {
    return db('users_values_and_projects as uvp')
        .insert(project, 'id')
        .select('users as u', 'uvp.user_id', 'u.id')
        .select('values as v', 'v.id', 'uvp.value_id')
        .where({ 'u.id': userId } && {'v.id': valueId })
        .then((ids => {
            return getByUserId(ids[0]);
        }))
}