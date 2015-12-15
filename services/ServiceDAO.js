/**
 * New node file
 */
var mySql = require('mysql'),
db = require("./db.js"),
bcrypt = require('bcrypt-nodejs'),
helpers = require("./helpers.js"),
uuid = require('node-uuid');

exports.version = "0.1.0";

exports.getTreeData = function(callback) {
	var dbc = db.db();
	dbc.query("SELECT * FROM polargeosystem.menuitems", callback);
	dbc.end();
};

exports.buildNewTreeNode = function(reqParam, callback) {
	var dbc = db.db();
	dbc.query('insert into menuitems (id,name,parent,icon,submenu,data,itemtype,datasetId) values (?,?,?,?,?,?,?,?)',
			[uuid.v1(), 
			 reqParam.name,
			 reqParam.parent,
			 reqParam.icon, 
			 reqParam.submenu,
			 reqParam.data,
			 reqParam.itemtype,
			 reqParam.datasetId], 
			callback);
	dbc.end();
};

exports.createOneImagesDataSet = function(reqParam, callback) {
	var dbc = db.db();
	dbc.query('insert into imagesDataSet (id,imageName,resultsData,site,batch) values (?,?,?,?,?)',
			[uuid.v1(), 
			 reqParam.imageName,
			 reqParam.resultsData,
			 reqParam.site,
			 reqParam.batch], 
			callback);
	dbc.end();
};