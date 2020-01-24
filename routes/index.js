const authRouter = require('./auth');
const usersRouter = require('./user-router');
const valuesRouter = require('./value-routers');
const userValuesRouter = require('./user-values');
const { handleError } = require('../helpers/errorHandler')

function routes(app) {
    app.use('/api/auth', authRouter);
    app.use('/api/users', usersRouter);
    app.use('/api/values', valuesRouter);
    app.use('/api/me/values', userValuesRouter);

    app.use(handleError);
    
    app.get('/', (req, res) => {
        res.status(200).json({
            api: 'running'
        })
    });
};

module.exports = routes;