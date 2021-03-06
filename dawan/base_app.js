const common = require('./common');
const config = require('../conf/dawan.config');
// airbnb require 后面最好有个空行
const logger = common.logger.defaultLogger;

const dawan = {
    common,
    logger,
    config,
};

/**
 * dawan 对象加固
 */
common.define.reinforceObject(dawan);

/**
 * 该对象持有app中一些配置的引用
 *
 * @type {Object}
 */
global.dawan = dawan;

/**
 * global dawan 加固
 */
common.define.reinforceObjectOneObject(global, 'dawan');

module.exports = global.dawan;

/**
 * 防止出现意外没有想到的错误使整个程序崩溃
 * @param  {[type]} 'uncaughtException' [description]
 * @param  {[type]} function(err        [description]
 * @return {[type]}                     [description]
 */
process.on('uncaughtException', (err) => {
    logger.error(err);
});
