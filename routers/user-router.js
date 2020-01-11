const router = require('express').Router();
const v = require('../variables/variables');
const protectedMiddleware = require('../helpers/protectedMiddleware');

const Users = require('../models/users-models');
const Values = require('../models/value-model');
const Projects = require('../models/projects-model');


// Get all the users of the application
router.get('/', (req, res) => {
    Users.get()
        .then(users => {
            res.status(200).json(users)
        })                
        .catch(error => {
            res.status(500).json(error)
        })
});

// Get a specific user
router.get('/:id', (req, res) => {
    const { id } = req.params;
    Users.getById(id)
        .then(user => {
            res.status(200).json(user)
        })                
        .catch(error => {
            res.status(500).json(error)
        })
});

// Get all values for a specified user
router.get('/:id/values', (req, res) => {
    const { id } = req.params;
    Values.getUserValues(id) 
        .then(values => {
            res.status(200).json(values)
        })
        .catch(error => {
            res.status(500).json(error)
        })
    
})

// Add a new value for a specified user
router.post('/:id/values', (req, res) => {
    const valueData = req.body;
    const { id } = req.params;

    Values
        .getByUserId(id)
        .then(value => {
            if(value) {
                Values.addUserValue(valueData, id)
                    .then(valueData => {
                        res.status(201).json({
                            message: v.newValueAdded,
                            valueData
                        })
                    })
            } else {
                res.status(404).json({
                    message: v.missingFields,
                })
            }
        })
        .catch(error => {
           res.status(500).json(error)
        })
})

// Get all the list of projects associated with a specific user based on their values
router.get('/:id/values/:valueId/projects', (req, res) => {
    const { valueId } = req.params;
    const { id } = req.params;
    
    console.log(req.params);
    Projects.getUserValueProjects() 
        .then(projects => {
            res.status(200).json(projects)
        })
        .catch(error => {
            res.status(500).json(error)
        })
})

// Get all the list of projects associated with a specific user
router.get('/:id/projects', (req, res) => {
    const { id } = req.params;
    Projects.getUserProjects() 
        .then(projects => {
            res.status(200).json(projects)
        })
        .catch(error => {
            res.status(500).json(error)
        })
})

// Add a new project from a specified user
router.post('/:id/values/:valueId/projects', (req, res) => {
    const projectData = req.body;
    const { id } = req.params;
    const { valueId } = req.params;


    console.log(req.params)

    Projects
        .getByUserId(id)
        .then(projects => {
            if(projects) {
                Projects.addSingleProject(projectData, id)
                    .then(projectData => {
                        res.status(201).json({
                            message: v.newProjectAdded,
                            projectData
                        })
                    })
            } else {
                res.status(404).json({
                    message: v.missingFields,
                })
            }
        })
        .catch(error => {
           res.status(500).json(error)
        })
})
module.exports = router;