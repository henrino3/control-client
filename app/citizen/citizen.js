'use strict';

angular.module('App.citizen', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/citizen', {
    templateUrl: 'citizen/citizens.html',
    controller: 'CitizenCtrl'
  });
}])

.controller('CitizenCtrl', [
	'$scope',
	'$http',
	'$rootScope',
	function($scope,$http,$rootScope) {
	 $scope.citizens = [];

   $http.get($rootScope.citizenData, {cache: true})
      .then(function(response) {
           console.log(response.data);
           return response.data.results;
           $scope.citizens = response.data;
      });

}]);

