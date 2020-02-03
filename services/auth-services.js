const bcrypt = require("bcryptjs");
// const sendConfirmationEmail = require('../helpers/verificationEmail');
const { verifyUser, getBy, addNewUser } = require('../models/users-models');
const {generateToken, generateVerificationToken } = require('../helpers/tokenGenerator');


exports.registerUser = async user => {
    try {
        const { password } = user;
        const hash = bcrypt.hashSync(password, 10);
        user.password = hash;
        user.jwt = generateVerificationToken(15, '12345abcde');
        
        const response = await addNewUser(user);
        const token = generateToken(response);
        
        // sendConfirmationEmail(response.email, response.jwt);
        return {
            response,
            token
        };
    } catch (error) {
        return error.message;
    }
};

exports.verifyEmail = async (token, id) => {
    try {
        const updatedUser = await verifyUser(token, id);
        return updatedUser;
    } catch(error) {
        return error.message;
    }
}

exports.loginUser = async (userData) => {
    const { email, password } = userData;

    try {
        // Get the email in the database
        const user = await getBy({email});
        // if the password from the user input matches the one in the db
        if(user && bcrypt.compareSync(password, user.password)) {
            const token = generateToken(user);
            return {
                email,
                token
            }
        }
        return null;
    } catch (error){
        console.log (error)
    }
}