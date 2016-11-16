var koa = require('koa');
var bodyParser = require('koa-bodyparser');
var session = require('koa-session');
var onerror = require('koa-onerror');
var app = koa();

var middlewares = require('./middlewares');

const config = global.dawan.config;
// ****************************************************************
// *********************基本中间件***********************************
// ****************************************************************

// 1.错误处理
onerror(app);

// 2.session
const sessionSecret = config.session_secret;
app.keys = [sessionSecret];
app.use(session({
    key:'koa:sess',
    maxAge:120000,
    overwirte:true,
    httpOnly:true,
    signed:true
},app));

// 3.body解析
app.use(bodyParser());

app.use(middlewares.responseTime);
app.use(middlewares.resEnhance);

// logger
app.use(function *(next){
  // (2) 进入 logger 中间件
  var start = new Date;
  yield next;
  // (4) 再次进入 logger 中间件，记录2次通过此中间件「穿越」的时间
  var ms = new Date - start;
  console.log('%s %s - %s', this.method, this.url, ms);
});

// response
app.use(function *(){
  // (3) 进入 response 中间件，没有捕获到下一个符合条件的中间件，传递到 upstream
  this.reply({
      data:'afsfaffaf'
  })
});

app.on('error', function(err, ctx){
  console.error('server error', err, ctx);
});

// express，koa 都是可以监听多个端口的
http.createServer(app.callback()).listen(3000);
http.createServer(app.callback()).listen(3001);
