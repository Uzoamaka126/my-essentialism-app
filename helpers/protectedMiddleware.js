const jwt = require('jsonwebtoken');
const v = require('../variables/variables');


module.exports = (req, res, next) => {
    const token = req.headers.authorization;

    if(token) {
        jwt.verify(
            token,
            'A SECRET CODE HERE',
            (err, decodedToken) => {
                if (err) {
                    res.status(401).json({
                        message: v.badToken
                    })
                } else {
                    req.decodedToken = decodedToken;
                    next()
                }
            }
        )
    } else {
        res.status(401).json({
            message: v.missingToken
        })
    }
}