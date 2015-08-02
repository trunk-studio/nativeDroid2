var koa = require('koa');
var router = require('koa-router')();
var request = require("co-request");
var mount = require('koa-mount');
var path = require('path');


var app = module.exports = koa();

var addr = process.env.MOBILE_PORT_1337_TCP_ADDR || 'localhost';
var port = process.env.MOBILE_PORT_1337_TCP_PORT || '3000';

var mobileServerUrl = 'http://' + addr + ':' + port;


router.get('/shop', function *(next) {
  this.redirect(mobileServerUrl + '/index.html')
});



app.use(serve('.'));

var port = 3000;

if (!module.parent) app.listen(port);
