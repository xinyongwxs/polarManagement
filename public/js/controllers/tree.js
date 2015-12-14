/**
 * Created by Lily on 2015/10/28.
 */
app.factory('treeDataFactory', ['$http', '$q', function($http, $q) {
	return {
		treeDataQuery: function() {
//			var deferred = $q.defer();
//			$http.get('/menuItems').success(function(data, status, headers, config) {
//				deferred.resolve(data);
//			}).error(function(data, status) {
//				deferred.reject(data);
//			});
//			return deferred.promise;
			
			var httpReq = new XMLHttpRequest();
			httpReq.open("GET", "/menuItems", false);
			httpReq.send();
			var result = JSON.parse(httpReq.responseText).data;
			return result;
		},
		buildNewTreeNode: function(newItem) {
//			var deferred = $q.defer();
			var request = $http({
				method: "post",
				url: "/buildNewTreeNode",
				data: {
					name: newItem.name,
					parent: newItem.parent,
					itemtype: newItem.sourcedatatype,
					description: newItem.desc,
					createdtime: newItem.pickdt,
					submenu: null,
					children: null,
					datasetId: newItem.dataset
				}
			});
			return request;
		}
	};
}]);

app.controller('AbnTestController',['$scope', '$modal', 'treeDataFactory', function($scope, $modal, treeDataFactory){
    $scope.my_tree_handler =function(branch){
        var _ref;
        $scope.contenttitle = branch.label;
        $scope.output = '数据描述：'+ branch.data.description;
        $scope.datetime = '采集时间：'+ branch.data.createtime;
        $scope.datatype = '数据类型：'+ branch.data.datatype;
        if((_ref = branch.data)!= null ? _ref.description : void 0){
            return $scope.output = _ref.description;
        }
    };
    var treeData,tree;
    treeData = treeDataFactory.treeDataQuery();
    tree = {};
    $scope.my_data = treeData;
    $scope.my_tree = tree;

    $scope.name = '';
    $scope.desc = '';
    $scope.sourcedatatype = '';
    $scope.pickdt = new Date();

    $scope.try_edit_the_selected_branch = function() {
        var b;
        console.log($scope.pickdt);
        b = tree.get_selected_branch();
        return tree.edit_branch(b, {
            label: $scope.name,
            data: {
                description:$scope.desc,
                createtime:$scope.pickdt,
                datatype:$scope.sourcedatatype.name
            }
        });
    };

    $scope.try_adding_a_branch = function() {
        $scope.edit_view_flag=true;
        var b;
        b = tree.get_selected_branch();
        return tree.add_branch(b, {
            label: '',
            data: {
                something: 42,
                "else": 43
            }
        });
    };


    //$scope.items = ['item1', 'item2', 'item3'];
    $scope.open = function (size) {
    	var selectedBranch = $scope.my_tree.get_selected_branch();
    	if (!selectedBranch) {
    		alert("Please selected one tree branch!");
    		return;
    	}
    	
        var modalInstance = $modal.open({
            templateUrl: 'myModalContent.html',
            controller: 'ModalInstanceCtrl',
            size: size,
            scope: $scope,
            resolve: {
                items: function () {
                    return $scope.items;
                }
            }
        });

        modalInstance.result.then(function (selectedItem) {
            $scope.selected = selectedItem;
        }, function () {
            //$log.info('Modal dismissed at: ' + new Date());
        });

    };
//	var promise = treeDataFactory.treeDataQuery();
//	promise.then(function(data) {}, function(data) {
//		console.log("tree data is null!");
//	});	
}]);


app.controller('ModalInstanceCtrl', ['$scope', 'treeDataFactory', '$modalInstance', 'items', function($scope, treeDataFactory, $modalInstance, items) {
    $scope.menuItem = {}; //只要完成我open这个窗口里的数据的绑定即可，点击提交按钮，是提交给服务器的，所以，关闭open窗口，整个tree获取后台数据（自动刷新一次）
    
    var parentItem = $scope.my_tree.get_selected_branch();

    $scope.menuItem.parent = parentItem.id; //存放一个参数，就是我当前选中的这个父节点，selected的这个节点传进来
    
//    $scope.menuItem.data = {
//    		description: $scope.menuItem.datadescription,
//    		createdtime: $scope.menuItem.pickdt
//    };

    $scope.typename = [
        {name:'位置-时间-图片'},
        {name:'位置-时间-属性'},
        {name:'空间位置-图片'},
        {name:'位置-属性'},
        {name:'位置-图片'},
        {name:'文本'}
    ];

    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };


    $scope.submitNewNode = function(){
    	var submitItem = $scope.menuItem;
    	var request = treeDataFactory.buildNewTreeNode(submitItem);
    	request.success(function(data) {
    		console.log(data);
    	});
    }
}])
;
