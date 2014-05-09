'use strict';

var APP_NAME = "myApp";
var APP_NAME_CONTROLLERS = APP_NAME + ".controllers";
var APP_NAME_SERVICES = APP_NAME + ".services";
var APP_NAME_FILTERS = APP_NAME + ".filters";
var APP_NAME_DIRECTIVES = APP_NAME + ".directives";

// Declare app level module which depends on filters, and services
angular.module(APP_NAME, [
  'ngRoute',
  'ngResource',
  'ui.bootstrap',
  'LocalStorageModule',
  'angular-util-services',
  APP_NAME_FILTERS,
  APP_NAME_SERVICES,
  APP_NAME_DIRECTIVES,
  APP_NAME_CONTROLLERS
]).

constant('Constants', {
    //locale mode : 
    //apiUrl: 'api/',
    //remote mode : 
    apiUrl: 'http://localhost:8080/'
}).

config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {templateUrl: 'partials/home.html', controller: 'HomeController'});
  $routeProvider.otherwise({redirectTo: '/home'});
}]).

config(['localStorageServiceProvider', function(localStorageServiceProvider){
    localStorageServiceProvider.setPrefix(APP_NAME);
}]);

//Modules declarations
angular.module(APP_NAME_CONTROLLERS, []);
angular.module(APP_NAME_SERVICES, []);
angular.module(APP_NAME_FILTERS, []);
angular.module(APP_NAME_DIRECTIVES, []);