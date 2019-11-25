const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const authRouter = require('../routers/auth-router');
const usersRouter = require('../routers/user-router');
const valuesRouter = require('../routers/value-routers');


const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/api/auth', authRouter);
server.use('/api/users', usersRouter);
server.use('/api/values', valuesRouter);

server.get('/', (req, res) => {
    res.status(200).json({
        api: 'running'
    })
});

module.exports = server;
