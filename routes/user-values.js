const express = require("express");
const service = require("../services/user-values");
const { authenticateUser } = require('../helpers/loggedIn');

const router = express.Router();

router.post("/", authenticateUser, async (req, res, next) => {
    const values = req.body;
    try {
        const userId = req.user.subject;
        
        values.map((value) => {
            service.addValues({
                name: value,
                userId
            })
        }) 
        return res.status(201).json({
            message: "Added your values",

        })
    } catch (error) {
        console.log(error);
        next(error);
    }
});

router.get("/", authenticateUser, async (req, res, next) => {
    try {
        const response = await service.getValues()
        res.status(200).json({
            message: "Success",
            response
        })
    } catch (error) {
        next(error)
    }
});

module.exports = router;