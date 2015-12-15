/**
 * data handler for serviceManager.js
 */
exports.treeDataHandlerNew = function(originData) {
	var outputData = [], tempData = [];
	var outputTempData = [];
	originData.forEach(function(item, idx) {
		var nodeData = null;
		if (item.data !== null) {
			nodeData = JSON.parse(item.data);
		}
		outputTempData.push({
			id: item.id,
			label: item.name,
			parent: item.parent,
			data: nodeData,
			children: [],
			isRead: false
		});
	});
	
	//First, push all the root nodes to outputData
	outputTempData.forEach(function(item, idx) {
		item.isRead = false;
		item.children = [];
		if (item.parent === null) {
			item.isRead = true;
			outputData.push(item);
		}
	});
	
	var pushToChildren = function(children, item) {
		var childrenLen = children.length;
		children.some(function(paItem, idx) {
			if (paItem.id === item.parent) {
				item.isRead = true;
				paItem.children.push(item);
				return true;
			} else if (idx === childrenLen - 1) {
				children.forEach(function(ppItem, idx) {
					pushToChildren(ppItem.children, item);
				});
			}
		});
	};
	
	//Second: push all the child nodes to the children arrays of root nodes.
	outputTempData.forEach(function(item, idx) {
		if (item.parent !== null && item.isRead === false) {
			pushToChildren(outputData, item);
		}
	});
	
	return outputData;
};

exports.treeNodeDataTransform = function(reqBody) {
	var result = {
		name: reqBody.name,
		parent: reqBody.parent,
		icon: "",
		data: JSON.stringify({
			description: reqBody.description,
			createtime: reqBody.createdtime
		}),
		itemtype: reqBody.sourcedatatype,
		datasetId: reqBody.datasetId,
		submenu: reqBody.submenu
	};
	
	return result;
};