'use strict';

angular.module('App.admin', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/signin', {
    templateUrl: 'admin/signin.html',
    controller: 'AdminCtrl'
  }).when('/admin/add', {
    templateUrl: 'admin/add_admin.html',
    controller: 'AdminCtrl'
  }).when('/admin/account', {
    templateUrl: 'admin/account_details.html',
    controller: 'AdminCtrl'
  });
}])

.controller('AdminCtrl', [function() {
//alert("this is something");
}]);
