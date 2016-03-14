var express = require('express');
var bodyParser = require('body-parser');
var middleware = require('./middleware');
var authorization = require('./auth');




module.exports = function(stockRepository, requireLogin) {
    var app = express();
    var routes = require('./routes')(stockRepository);
    if(requireLogin) {
        app.use(authorization("orthhafs", "test2"));
    }

    app.use(bodyParser.json());
    app.use(middleware.logIncoming);

    app.post('/stock', routes.stockUp);

    app.get('/stock', routes.findAll);

    app.get('/stock/:isbn', routes.getCount);

    app.use(middleware.clientError);
    app.use(middleware.serverError);

    return app;
    //test here
};