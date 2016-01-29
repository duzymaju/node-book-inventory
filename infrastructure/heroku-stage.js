'use strict';

var configCommon = require('./heroku-common');
var heroin = require('heroin-js');
var _ = require('lodash');

var configurator = heroin(process.env.HEROKU_API_TOKEN, {
    debug: false
});

var configProduction = {
    name: 'node-book-inventory-stage',
    config_vars: {
        MONGOLAB_URI: '',
        NODE_ENV: 'stage'
    },
    collaborators: [
        'aaaaa@bbbb.ccc'
    ],
    domains: [
        'node-book-inventory-stage.herokuapp.com'
    ]
};

configurator(_.merge({}, configCommon, configProduction));
