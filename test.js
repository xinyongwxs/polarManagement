var test = {
    "name": "qwe",
    "parent": 9,
    "itemtype": {
        "name": "位置-属性"
    },
    "description": "sdfsdfsdf",
    "createdtime": "2015-12-11T16:00:00.000Z",
    "submenu": null,
    "children": null,
    "datasetId": "32"
};

var result = {
		name: reqBody.name,
		parent: reqBody.parent,
		icon: "",
		submenu: "",
		data: JSON.stringify({
			description: reqBody.description,
			createtime: reqBody.createdtime
		}),
		itemtype: reqBody.name,
		datasetId: reqBody.datasetId,
		submenu: reqBody.submenu
	};