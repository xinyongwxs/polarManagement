/**
 * New node file
 */
var path = require('path');
var fs = require('fs');

exports.version = '0.1.0';

exports.send_success = function(res, data) {
	res.writeHead(200, {"Content_Type": "application/json"});
	var output = {error: null, data: data};
	res.end(JSON.stringify(output) + "\n");
};

exports.send_failure = function(res, err) {
    console.log(err);
    var code = (err.code) ? err.code : err.name;
    res.writeHead(code, { "Content-Type" : "application/json" });
    res.end(JSON.stringify({ error: code, message: err.message }) + "\n");
};