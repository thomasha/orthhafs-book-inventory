var mongoRepository = require('./mongoStockRepository');
var requireLogin = true;
var app = require('./app')(mongoRepository, requireLogin);

app.listen(process.env.PORT || 3000, function () {
    console.log('Example app listening on port 3000!');
});