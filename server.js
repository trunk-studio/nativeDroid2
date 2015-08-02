var koa = require('koa');
var router = require('koa-router')();
var request = require("co-request");
var mount = require('koa-mount');
var path = require('path');
var staticCache = require('koa-static-cache');

var app = module.exports = koa();

var addr = process.env.DOMAIN_NAME || 'localhost';
var port = process.env.MOBILE_PORT_3000_TCP_PORT || '3000';


var mobileServerUrl = 'http://' + addr + ':' + port;
var get_ip = require('ipware')().get_ip;
var requestIp = require('request-ip');

router.get('/shop', function *(next) {
  console.log(mobileServerUrl + '/index.html');
  this.redirect(mobileServerUrl + '/index.html')
});

router.get('/', function *(next) {
  this.redirect('/examples/agricloud/shop.html');
});

app
  .use(router.routes())
  .use(router.allowedMethods());

app.use(mount('/', staticCache(path.join(__dirname, '.'))));

var port = 2000;

if (!module.parent) app.listen(port);
