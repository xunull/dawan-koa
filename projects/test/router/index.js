var Router = require('koa-router');

var router = new Router();
router.get('/haha',function *(next){
	this.body='12121212121212'
});

module.exports=router;
