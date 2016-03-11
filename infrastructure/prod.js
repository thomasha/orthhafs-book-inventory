var _ = require('lodash');
var heroin = require('heroin-js');

var prod = {
    name: 'orthhafs-book-inventory',
    config_vars: {
        MONGOLAB_URI: 'mongodb://heroku_f4w6mj97:qfr25a6p3i6i92gbmmbc2jh8sg@ds055945.mlab.com:55945/heroku_f4w6mj97',
        NODE_ENV: "production"
    },
    domains: [ 'orthhafs-book-inventory.herokuapp.com' ]
};

var config = _.merge({}, require('./base'), prod);

//var configurator = heroin("dc727dd6-65e6-4801-887d-930f338fb426");
var configurator = heroin(process.env.HEROKU_API_TOKEN);
configurator(config);
