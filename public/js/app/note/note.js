app.controller('NoteCtrl', ['$scope', '$http', function($scope, $http) {
  $http.get('js/app/note/notes.json').then(function (resp) {
    $scope.notes = resp.data.notes;
    // set default note
    $scope.note = $scope.notes[0];
    $scope.notes[0].selected = true;
  });

  $scope.colors = ['primary', 'info', 'success', 'warning', 'danger', 'dark'];

  $scope.add_database = false;
  $scope.adddatabase = function(){
    $scope.add_database = true;
    $scope.checkninf = false;
    $scope.databasename = "";
    $scope.linkaddress = "";
    $scope.dbusername = "";
    $scope.password = "";
    $scope.Arcdataname = "";
    $scope.typename = "";
    $scope.arctype = "";
    $scope.asyncSelected = "";
    //$scope.datasource_type = "arcgis";

  }

typename: "",



  $scope.createNote = function(){
    //console.log($scope.databasename || $scope.Arcdataname);
    //var note = {};
    var note = {
      content: $scope.Arcdataname,
      color: $scope.colors[Math.floor((Math.random()*3))],
      date: Date.now(),
      type: $scope.arctype.name,
      address:$scope.asyncSelected,
      password:$scope.password
    };

    $scope.notes.push(note);
    $scope.selectNote(note);
    $scope.add_database = false;
    //$scope.a = note.content;
  }

  $scope.deleteNote = function(note){
    $scope.notes.splice($scope.notes.indexOf(note), 1);
    if(note.selected){
      $scope.note = $scope.notes[0];
      $scope.notes.length && ($scope.notes[0].selected = true);
    }
  }

  $scope.selectNote = function(note){
    $scope.add_database = false;
    angular.forEach($scope.notes, function(note) {
      note.selected = false;
    });
    $scope.note = note;
    $scope.note.selected = true;
    $scope.checkninf = true;
    //$scope.check_databaseInf = true;
  }

  $scope.cancel = function(){
    $scope.add_database = false;
  }



  $scope.edit_geodatabase = false;
  $scope.edit_sundatabase = true;
  $scope.checkninf = false;


  //$scope.editgeodatabase = function() {
  //
  //  $scope.edit_geodatabase = true;
  //  $scope.edit_sundatabase = false;
  //
  //}
  //$scope.editsundatabase = function() {
  //  $scope.edit_geodatabase = false;
  //  $scope.edit_sundatabase = true;
  //}


  //$scope.check_databaseInf = false;
  //$scope.check = function(){
  //  $scope.check_databaseInf = true;
  //}

  $scope.database = [
    {name:'Oracle'},
    {name:'MySQL'}
  ];

  $scope.geodatabase = [
    {name:'ArcGIS瓦片图'},
    {name:'ArcGIS动态图'},
    {name:'Feature Server'},
    {name:'Image Server'}
  ];

}]);
