var heroin = require('heroin-js');
//dc727dd6-65e6-4801-887d-930f338fb426
//var configurator = heroin(process.env.HEROKU_API_TOKEN, {debug: false});

var configurator = heroin("dc727dd6-65e6-4801-887d-930f338fb426");

//configurator.export('orthhafs-book-inventory').then(function(result) {
//    console.log(result);
//});


var prod = { name: 'orthhafs-book-inventory',
    region: 'eu',
    maintenance: false,
    stack: 'cedar-14',
    config_vars: {
        MONGOLAB_URI: 'mongodb://heroku_f4w6mj97:qfr25a6p3i6i92gbmmbc2jh8sg@ds055945.mlab.com:55945/heroku_f4w6mj97',
        NODE_ENV: "production"
    },
    addons: {
        mongolab: { plan: 'mongolab:sandbox' }
    },
    collaborators: [ 'janrobert.n@gmail.com', 'thomashafsaas@gmail.com' ],
    features:
    { 'runtime-dyno-metadata': { enabled: false },
        'log-runtime-metrics': { enabled: false },
        'http-session-affinity': { enabled: false },
        preboot: { enabled: false },
        'http-shard-header': { enabled: false },
        'http-end-to-end-continue': { enabled: false } },
    formation: [ { process: 'web', quantity: 1, size: 'Free' } ],
    log_drains: [],
    domains: [ 'orthhafs-book-inventory.herokuapp.com' ] };


var test = { name: 'orthhafs-book-inventory-test',
    region: 'eu',
    maintenance: false,
    stack: 'cedar-14',
    config_vars: {
        NODE_ENV: "test"
    },
    addons: {
        mongolab: { plan: 'mongolab:sandbox' }
    },
    collaborators: [ 'janrobert.n@gmail.com', 'thomashafsaas@gmail.com' ],
    features:
    { 'runtime-dyno-metadata': { enabled: false },
        'log-runtime-metrics': { enabled: false },
        'http-session-affinity': { enabled: false },
        preboot: { enabled: false },
        'http-shard-header': { enabled: false },
        'http-end-to-end-continue': { enabled: false } },
    formation: [ { process: 'web', quantity: 1, size: 'Free' } ],
    log_drains: [],
    domains: [ 'orthhafs-book-inventory-test.herokuapp.com' ] };



configurator(test);