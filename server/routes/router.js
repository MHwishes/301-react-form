exports.setRoutes = (app) => {
    app.use('/api', require('./routers/getPaper'));
    app.use('/api', require('./routers/getHomework'));

};