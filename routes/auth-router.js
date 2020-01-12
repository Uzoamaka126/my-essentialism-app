// const router = require('express').Router();
// const bcrypt = require('bcryptjs');
// const protectedMiddleware = require('../helpers/protectedMiddleware');
// const v = require('../variables/variables');
// const tg = require('../helpers/tokenGenerator');

// const Users = require('../models/users-models');

// // Register endpoint
// router.post('/register', (req, res) => {
//     let user = req.body;
//     console.log(user)
//     const hash = bcrypt.hashSync(user.password, 10);
//     user.password = hash;

//     Users.add(user)
//         .then(saved => {
//             if(saved) {
//                 const token = tg.generateToken(saved);
//                 console.log(token)
//                 const username = saved.username;
//                 res.status(201).json({
//                     message: v.registerMessage(username),
//                     token: token,
//                     // saved
//                 })
//             } else {
//                 res.status(401).json({
//                     message: v.missingFields
//                 })
//             }
//         })
//         .catch(error => {
//             res.status(500).json(error);
//         })
// })

// router.post('/login', (req, res) => {
//     let { username, password } = req.body;

//     Users.addNewUser({ username })
//         .first()
//         .then(user => {
//             if(user && bcrypt.compareSync(password, user.password)) {
//                 const token = tg.generateToken(user)
//                 res.status(200).json({
//                     message: v.signInMessage,
//                     token: token
//                 })
//             } else {
//                 res.status(401).json({
//                     message: v.invalid
//                 })
//             }
//         })
//         .catch(error => {
//             res.status(500).json(error)
//         })
// })
// module.exports = router;