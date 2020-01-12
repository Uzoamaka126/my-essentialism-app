const db = require('../database/db-config');

exports.userExists = async (req, res, next) => {
    let { email } = req.body;

    const user = await db("users")
        .where({ email: email })
        .first()

    if (user) 
        return res.status(400).json({
            error: "This email already exists"
        });
    next();
};

exports.checkIfUserDetailsExists = async (req, res, next) => {
    let { fullname } = req.body;

    const user = await db("users")
        if(user) next();
        return res.status(404).json({
            error: "User not found"
        })
};