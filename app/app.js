'use strict';

// Declare app level module which depends on views, and components
angular.module('App', [
  'ngRoute',
  'App.home',	
  'App.signin',
  'App.dashboard',
  'App.crud'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider
  .otherwise({redirectTo: '/home'});
}]);