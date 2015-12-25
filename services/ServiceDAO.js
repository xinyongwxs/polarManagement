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

exports.createDataSet = function(reqParam, callback) {
	var dbc = db.db();
	dbc.query('insert into dataset (id,name,imageName,resultsData,site,batch,viewTimes,downloadTimes,description,type,dateStr) values (?,?,?,?,?,?,?,?,?,?,?)',
			[uuid.v1(),
			 reqParam.name,
			 reqParam.imageName,
			 reqParam.resultsData,
			 reqParam.site,
			 reqParam.batch,
			 reqParam.viewTimes,
			 reqParam.downloadTimes,
			 reqParam.description,
			 reqParam.type,
			 reqParam.dateStr], 
			callback);
	dbc.end();
};

exports.getDataSetListByMenuItem = function(reqParam, callback) {
	var dbc = db.db();
	dbc.query('', [reqParam.menuItemId], callback);
	dbc.end();
};

exports.getDataSetIsExisted = function(reqParam, callback) {
	var dbc = db.db();
	dbc.query('SELECT COUNT(*) as existedLine FROM `dataset` WHERE `site`=? and `dateStr`=?', 
			[reqParam.site, reqParam.dateStr], callback);
	dbc.end();
};

exports.getAllDataSetNames = function(callback) {
	var dbc = db.db();
	dbc.query('SELECT id,name FROM polargeosystem.dataset', callback);
	dbc.end();
};

exports.updateZipNameForDataSet = function(reqParam, callback) {
	var dbc = db.db();
	dbc.query('UPDATE `dataset` SET `resultsData`=? WHERE `site`=? AND `dateStr`=?', 
			[reqParam.resultsData, reqParam.site, reqParam.dateStr], callback);
	dbc.end();
};

exports.updateImgNameForDataSet = function(reqParam, callback) {
	var dbc = db.db();
	dbc.query('UPDATE `dataset` SET `imageName`=? WHERE `site`=? AND `dateStr`=?', 
			[reqParam.imageName, reqParam.site, reqParam.dateStr], callback);
	dbc.end();
};