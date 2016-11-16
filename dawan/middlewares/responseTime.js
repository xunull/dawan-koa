module.exports = function *(next){
    let start = new Date;
    yield next;
    let ms = new Date - start;
    console.log(this);
    console.log('%s %s - %s ',this.method,this.url,ms);

}
