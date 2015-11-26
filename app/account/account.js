'use strict';

angular.module('App.account', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/account', {
    templateUrl: 'account/accounts.html',
    controller: 'AccountCtrl'
  });
}])

.controller('AccountCtrl', [function() {

}]);


