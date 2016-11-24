var koa = require('koa')
var bodyParser = require('koa-bodyparser')
var session = require('koa-session')
var onerror = require('koa-onerror')
var app = koa()
var http = require('http')

var middlewares = require('./middlewares')

const config = global.dawan.config

// ****************************************************************
// *********************基本中间件***********************************
// ****************************************************************

// 1.错误处理
onerror(app)

// 2.session
const sessionSecret = config.session_secret
app.keys = [sessionSecret]
app.use(session({
    key: 'koa:sess',
    maxAge: 120000,
    overwirte: true,
    httpOnly: true,
    signed: true
}, app))

// 3.body解析
app.use(bodyParser())

app.use(middlewares.responseTime)
app.use(middlewares.resEnhance)
app.use(middlewares.reqTrace)

app.on('error', function(err, ctx) {
    console.error('server error', err, ctx)
})

// express，koa 都是可以监听多个端口的
http.createServer(app.callback()).listen(config.port);
