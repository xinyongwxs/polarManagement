/**
 * New node file
 */
var dao = require('./ServiceDAO.js'),
helpers = require('./helpers.js'),
dataHandler = require('./dataHandler.js'),
fileUploader = require('./fileUpload.js'),
fs = require('fs');

exports.getTreeData = function(req, res) {
	dao.getTreeData(function(err, user_data) {
		if (err) {
			helpers.send_failure(res, err);
		} else {
			var outputData = dataHandler.treeDataHandlerNew(user_data);
			helpers.send_success(res, outputData);
		}
	});
};

exports.buildNewTreeNode = function(req, res) {
	var reqParam = dataHandler.treeNodeDataTransform(req.body);
	dao.buildNewTreeNode(reqParam, function(err, rows) {
		if (err) {
			helpers.send_failure(res, err);
		} else {
			helpers.send_success(res, "success");
		}
	});
};

exports.createOneImagesDataSet = function(req, res) {
	var reqParam = {
		imageName: req.body.imageName,
		resultsData: req.body.resultsData,
		site: req.body.site,
		batch: req.body.batch
	};
	dao.createOneImagesDataSet(reqParam, function(err, rows) {
		if (err) {
			helpers.send_failure(res, err);
		} else {
			helpers.send_success(res, "success");
		}
	});
};

exports.getAllDataSetNames = function(req, res) {
	dao.getAllDataSetNames(function(err, user_data) {
		if (err) {
			helpers.send_failure(res, err);
		} else {
			helpers.send_success(res, user_data);
		}
	});
};

exports.uploadMultipleFiles = function(app) {
	fileUploader.uploadMultipleFiles(app);
};

exports.uploadSingleImage = function(app) {
	fileUploader.uploadSingleImage(app);
};

exports.uplaodSingleFile = function(app) {
	fileUploader.uplaodSingleFile(app);
};