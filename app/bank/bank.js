'use strict';

angular.module('App.bank', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/bank', {
    templateUrl: 'bank/view_list.html',
    controller: 'BankCtrl'
  }).when('/bank/list', {
    templateUrl: 'bank/view_thumb.html',
    controller: 'BankCtrl'
  }).when('/bank/add', {
    templateUrl: 'bank/add_bank.html',
    controller: 'BankCtrl'
  }).when('/bank/detail', {
    templateUrl: 'bank/view_detail.html',
    controller: 'BankCtrl'
  }).when('/bank/customers', {
    templateUrl: 'bank/customers.html',
    controller: 'BankCtrl'
  });
}])

.controller('BankCtrl', [function() {

}]);


