var koa = require('koa');
var router = require('koa-router')();
var request = require("co-request");
var koaBodyParser = require('koa-bodyparser');
var mount = require('koa-mount');
var path = require('path');
var staticCache = require('koa-static-cache');
var serve = require('koa-static-folder');

var app = module.exports = koa();

app.use(koaBodyParser());

app.use(serve('.'));

var port = 3000;

if (!module.parent) app.listen(port);
