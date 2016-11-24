const ejs = require('ejs');

module.exports = function * (next) {
    addReply();

    yield next;
}

function addReply() {

    function reply({
        ok = true,
        data = null,
        error_code = 0,
        error_msg = ''
    }) {
        this.type = 'application/json; charset=utf-8';
        this.body = JSON.stringify({ok: ok, data: data, error_code: error_code, error_msg: error_msg});
    }

    Object.defineProperty(this, 'reply', {
        value: reply,
        enumerable: true,
        configurable: false,
        writable: false
    });

}

function addEjsRender() {

    function ejsRender(filename, data) {

    }

    Object.defineProperty(this, 'ejsRender', {
        value: ejsRender,
        enumerable: true,
        configurable: false,
        writable: false
    })

}
