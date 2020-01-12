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


module.exports = router;