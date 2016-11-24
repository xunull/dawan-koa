/**
 * 项目中的一些文件目录的配置
 */
const path = require('path');

module.exports = {
	// log 文件目录
    logDir: path.resolve(__dirname, '../logs'),
	// 业务代码目录
    businessPath: path.resolve(__dirname, '../business'),
    // 业务产生的数据的存放目录
    businessDataFolder: path.resolve(__dirname, '../businessData')
}
