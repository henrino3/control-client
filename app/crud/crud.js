'use strict';

var gem={
    name:'name of content',
	price :'dem',
	purchase:true
}
angular.module('App.crud', ['ngRoute'])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/crud', {
    templateUrl: 'crud/crud.html',
    controller: 'crudCtrl'
  });
}])


.controller('crudCtrl', function($scope, $http) {

    $http.get("http://127.0.0.1:5000/ext/api/out")
    .success(function(response) {$scope.names = response.records;
	var text=$scope.names;
	console.debug(text);
	});
});

  
 
