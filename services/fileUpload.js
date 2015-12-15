/**
 * New node file
 */
var uuid = require('node-uuid'),
multer = require('multer');



exports.version = "0.1.0";

exports.uploadMultipleFiles = function(app) {
	
	var upload = multer({ dest: 'uploads/' });
	
	app.post('/uploadMultipleFiles', upload.array('polarFile', 20), function(req, res, next) {
		
	});
	
};
