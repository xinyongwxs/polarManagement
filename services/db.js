/**
 * New node file
 */
var mysql = require('mysql'),
local = require('../local.config.js');

exports.db = function() {
	var conn_props = local.config.db_config;
	var c = mysql.createConnection({
		host: conn_props.host,
		user: conn_props.user,
		password: conn_props.password,
		database: conn_props.database
	});
	return c;
};
