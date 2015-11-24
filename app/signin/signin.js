'use strict';

angular.module('App.signin', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/signin', {
    templateUrl: 'signin/signin.html',
    controller: 'SignInCtrl'
  });
}])

.controller('SignInCtrl', [function() {
//alert("this is something");
}]);