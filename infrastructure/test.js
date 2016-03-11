var _ = require('lodash');
var heroin = require('heroin-js');

var prod = {
    name: 'orthhafs-book-inventory-test',
    config_vars: {
        NODE_ENV: "production"
    },
    domains: [ 'orthhafs-book-inventory-test.herokuapp.com' ]
};

var config = _.merge({}, require('./base'), prod);

//var configurator = heroin("dc727dd6-65e6-4801-887d-930f338fb426");
var configurator = heroin(process.env.HEROKU_API_TOKEN);
configurator(config);