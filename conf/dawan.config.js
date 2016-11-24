var path = require('path');
var directoryConfig =  require('./dawan.directory.config');

const config = {

    hostname: '127.0.0.1',
    debug: true,
    port: 5000,
    session_secret: 'lafdjslx-sdfjxsfsd-xs',
    permission: false, //是否启用权限验证
    logFileDir:path.resolve(__dirname,'../logs'),
    logger: {
        logFileName: 'log.log',
        errorFileName: 'error.log',
        level: 'debug'
    },

};

config.directoryConfig=directoryConfig;

module.exports = config;
