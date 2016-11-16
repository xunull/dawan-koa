var express = require('express');

var middlewares = require('./middlewares');
var express_app = global.dawan.express_app;
var config = global.dawan.config;

// 中间件添加的顺序就是中间件执行的顺序
// 解析debug 参数
if (config.debug) {
    express_app.use(middlewares.debug.parse);
}
// nosession
express_app.use(middlewares.nosession.setSession);
// 权限验证中间件
// 先执行对权限的验证
express_app.use(middlewares.permission.userRequired);

express_app.use(middlewares.menu.generateUserMenu);

express_app.use(middlewares.resEnhance.addReply);


//**************************** 系统设置 ********************************

// express_app.use('/admin',adminRouter);
