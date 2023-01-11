var express = require("express");
var app     = express();
var http    = require("http").createServer(app);
var fs 			= require('fs');
var io      = require("socket.io").listen(http);

var main    = require('./main');
var config  = require('./config');
var router  = require('./router');


var m = new main(app, io);

/*
* Server config
*/
config(app, express);

/**
* Server routing and io events
*/
router(app, io, m);

/**
* To ignore favicon errors
*/

app.use(ignoreFavicon);
function ignoreFavicon(req, res, next) {
	if (req.originalUrl.includes('favicon.ico')) {
		res.status(204).end()
	}
	next();
}



/**
* Start the http server at port and IP defined before
*/
http.listen(app.get("port"), /*app.get("ipaddr"),*/ function() {
  console.log("Server up and running. Go to http://localhost:" + app.get("port"));
});

