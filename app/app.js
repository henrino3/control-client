'use strict';

// Declare app level module which depends on views, and components
angular.module('App', [
  'ngRoute',
  'App.home',	
  'App.admin',
  'App.dashboard',
  'App.citizen',
  'App.account',
  'App.bank',
  'App.transaction',
  'App.crud'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider
  .otherwise({redirectTo: '/dashboard'});
}])

.run(function($rootScope) {
	
  $rootScope.citizenData = 'http://localhost:3000/citizens.json';
  $rootScope.bankData = 'http://localhost:3000/banks.json';
  $rootScope.transactionData = 'http://localhost:3000/citizens.json';
  $rootScope.accountxData = 'http://localhost:3000/citizens.json';


});