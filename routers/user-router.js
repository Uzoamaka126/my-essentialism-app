const router = require('express').Router();
const v = require('../variables/variables');
const protectedMiddleware = require('../helpers/protectedMiddleware');

const Users = require('../models/users-models');
const Values = require('../models/value-model');
const Projects = require('../models/projects-model');


// Get all the users of the application
router.get('/', protectedMiddleware, (req, res) => {
    Users.get()
        .then(users => {
            res.status(200).json(users)
        })                
        .catch(error => {
            res.status(500).json(error)
        })
});

// Get all values for a specified user
router.get('/:id/values', protectedMiddleware, (req, res) => {
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
router.post('/:id/values', protectedMiddleware, (req, res) => {
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

// Get all the list of projects associated with a specific user
router.get('/:id/projects', protectedMiddleware, (req, res) => {
        const { id } = req.params;
        Projects.get() 
            .then(projects => {
                res.status(200).json(projects)
            })
            .catch(error => {
                res.status(500).json(error)
            })
        
    })

// Add a ne project from a specified user
router.post('/:id/projects', protectedMiddleware, (req, res) => {
    const projectData = req.body;
    const { id } = req.params;

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