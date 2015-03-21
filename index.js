var server = require("./script");
var router = require("./router");

server.start(router.route);
