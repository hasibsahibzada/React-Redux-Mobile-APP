var path = require('path');
var config = require('../webpack.config.prod');

module.exports = {
    resolve: config.resolve,
    module: config.module
};
