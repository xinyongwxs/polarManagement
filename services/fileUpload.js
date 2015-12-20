/**
 * New node file
 */
var uuid = require('node-uuid'),
multer = require('multer'),
helpers = require('./helpers.js'),
fs = require('fs'),
dao = require('./ServiceDAO.js');



exports.version = "0.1.0";

//var upload = multer();

exports.uploadMultipleFiles = function(app) {
	app.post('/uploadMultipleFiles', function(req, res) {
		var file = req.files.file;
		fs.renameSync(file.path, "public/uploads/" + file.name);
		helpers.send_success(res, "success");
	});
	

	
};

exports.uploadSingleImage = function(app) {
	app.post('/uploadSingleImage', function(req, res) {
		var file = req.files.file;
		fs.renameSync(file.path, "public/uploads/" + file.name);
		helpers.send_success(res, "success");
	});
};
