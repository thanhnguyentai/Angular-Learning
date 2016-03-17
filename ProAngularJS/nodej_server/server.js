var http = require('http');
var connect = require('connect');
var serveStatic = require('serve-static');
var st = require('st');

/*
var noCache = require('connect-nocache')();
var express = require('express');
 
var appExpress = express();
appExpress.get('/', noCache, function (req, res) {
});
*/
var app = connect();
/*
var mount = st({
	path:'*',
	cache: false
});

http.createServer(function(req, res){
	if(mount(req, res)) return;
});
*/

app.use(serveStatic("../../Work/AngularJs/ProAngularJS"));
//app.use(mount);

app.listen(5000);