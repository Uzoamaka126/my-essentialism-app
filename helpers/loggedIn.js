const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require('../config/index');

function authenticateUser(req, res, next) {
    const token = req.headers['authorization'] || 'trapped';

    if(token) {
        jwt.verify(token, JWT_SECRET, (err, decoded) => {
            if(err)
                return res.status(401).json({
                    message: 'User not authenticated',
                });
            req.user = decoded;

            next();
        })
    } else {
        return res.status(401).json({
            error: 'No token provided, token is requires in the header'
        });
    }
}

module.exports = {
    authenticateUser
};