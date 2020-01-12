const router = require('express').Router();
const Values = require('../models/value-model');
const v = require('../variables/variables');
const protectedMiddleware = require('../helpers/protectedMiddleware');

// Get all values no userId require
router.get('/', (req,  res) => {
    Values.get()
        .then(values => {
            res.status(200).json(values)
        })
        .catch(error => {
            res.status(500).json(error)
        })
})

// Add a new value, no userId required
router.post('/', (req, res) => {
    Values
        .addValue(req.body)
        .then(newValue => {
            return res.status(201).json({
                message: v.newValueAdded,
                newValue
            })
        })
        .catch(error => {
            res.status(500).json(error);
        })
});


module.exports = router;