exports.setRoutes = (app) => {
    app.use('/api', require('./routers/getPaper'));

};