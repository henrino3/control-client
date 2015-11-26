'use strict';

angular.module('App.dashboard', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/dashboard', {
    templateUrl: 'dashboard/dashboard.html',
    controller: 'DashboardCtrl'
  });
}])



.controller('DashboardCtrl', [
	'$scope',
	'$http',
	'$rootScope',
	function($scope,$http,$rootScope) {

		
   $http.get($rootScope.citizenData, {cache: true})
      .then(function(response) {
           console.log(response);
           return response.data.results;
           $scope.citizens = response.data;
      });
     

    }]);


