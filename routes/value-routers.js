const router = require('express').Router();
const valueService = require('../services/value-services');
const v = require('../variables/variables');
const protectedMiddleware = require('../helpers/protectedMiddleware');

// Get all values no userId require
router.get('/', async (req,  res, next) => {
    try {
        const values = await valueService.getValues();
        res.status(values.statusCode).json(values.data);
    } catch (error) {
        next(error);
    }
})

// // Add a new value, no userId required
// router.post('/', (req, res) => {
//     Values
//         .addValue(req.body)
//         .then(newValue => {
//             return res.status(201).json({
//                 message: v.newValueAdded,
//                 newValue
//             })
//         })
//         .catch(error => {
//             res.status(500).json(error);
//         })
// });


module.exports = router;