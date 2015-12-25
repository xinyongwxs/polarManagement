/**
 * New node file
 */
var uuid = require('node-uuid'),
multer = require('multer'),
helpers = require('./helpers.js'),
fs = require('fs'),
dao = require('./ServiceDAO.js'),
dataHandler = require('./dataHandler.js');



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
		var imgInfo = dataHandler.parseImageName(file.name);
		dao.createOneImagesDataSet({
			 name: file.name,
			 imageName: file.name,
			 resultsData: "",
			 site: imgInfo.site,
			 batch: "",
			 viewTimes: 0,
			 downloadTimes: 0,
			 description: "",
			 dateStr: imgInfo.dateStr,
			 type: "image"
		});
		helpers.send_success(res, "success");
	});
};

exports.uplaodSingleFile = function(app) {
	app.post('/uploadSingleFile', function(req, res) {
		var file = req.files.file;
		var fileInfo = dataHandler.parseFileName(file.name);
		if (fileInfo.fileType === "zip") {
			fs.renameSync(file.path, "public/uploads/图片数据集/成果数据/" + file.name);
		} else if (fileInfo.fileType === "png") {
			fs.renameSync(file.path, "public/uploads/图片数据集/成果图集/" + file.name);
		}
		
		dao.getDataSetIsExisted({
			site: fileInfo.site,
			dateStr: fileInfo.dateStr
		}, function(err, user_data) {
			var lineCount = user_data[0].existedLine;
			if (lineCount === 1) {
				//If the data set exist, just update it.
				if (fileInfo.fileType === "zip") {
					dao.updateZipNameForDataSet({
						resultsData: fileInfo.fileName,
						site: fileInfo.site,
						dateStr: fileInfo.dateStr
					}, function(err, user_data) {
						helpers.send_success(res, "success");
					});
				} else if (fileInfo.fileType === "png") {
					dao.updateImgNameForDataSet({
						imageName: fileInfo.fileName,
						site: fileInfo.site,
						dateStr: fileInfo.dateStr
					}, function(err, user_data) {
						helpers.send_success(res, "success");
					});
				} else {
					helpers.send_failure(res, {
						name: "fileInvalid",
						message: "The file is invalid, please change a file to upload."
					});
				}
			} else if (lineCount === 0){
				//If the data set does not exist, just create it.
				var reqParam = null;
				var dataSetName = fileInfo.rawNameArray[0] + "_" + 
				fileInfo.rawNameArray[1] + "_" + 
				fileInfo.rawNameArray[2] + "_" + 
				fileInfo.rawNameArray[3] + "_" + 
				fileInfo.dateStr;
				
				if (fileInfo.fileType === "zip") {
					reqParam = {
						name: dataSetName,
						imageName: "",
						resultsData: fileInfo.fileName,
						site: fileInfo.site,
						batch: "",
						viewTimes: 0,
						downloadTimes: 0,
						description: "",
						type: "image",
						dateStr: fileInfo.dateStr
					};
				} else if (fileInfo.fileType === "png") {
					reqParam = {
						name: dataSetName,
						imageName: fileInfo.fileName,
						resultsData: "",
						site: fileInfo.site,
						batch: "",
						viewTimes: 0,
						downloadTimes: 0,
						description: "",
						type: "image",
						dateStr: fileInfo.dateStr
					};
				}

				dao.createDataSet(reqParam, function(err, rows) {
					if (err) {
						helpers.send_failure(res, err);
					} else {
						helpers.send_success(res, "success");
					}
				});
			}
		});

	});
};
