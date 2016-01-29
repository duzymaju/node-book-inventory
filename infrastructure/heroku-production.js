'use strict';

var configCommon = require('./heroku-common');
var heroin = require('heroin-js');
var _ = require('lodash');

var configurator = heroin(process.env.HEROKU_API_TOKEN, {
    debug: false
});

var configProduction = {
    name: 'node-book-inventory',
    config_vars: {
        MONGOLAB_URI: '',
        NODE_ENV: 'production'
    },
    collaborators: [
        'aaaaa@bbbb.ccc'
    ],
    domains: [
        'node-book-inventory.herokuapp.com'
    ]
};

configurator(_.merge({}, configCommon, configProduction));
