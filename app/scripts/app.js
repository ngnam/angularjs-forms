'use strict';

/**
 * @ngdoc overview
 * @name angularFormsAppApp
 * @description
 * # angularFormsAppApp
 *
 * Main module of the application.
 */
var app = angular.module('angularFormsApp', ['ngRoute']); 
app.config(['$routeProvider', function($routeProvider) {
	$routeProvider
		.when('/home', {
			templateUrl: 'app/views/home.html',
			controller: 'HomeController'
		})
		.when('/newEmployeeForm', {
			templateUrl: 'app/views/templates/ef.html',
			controller: 'efController'
		})
		.when('/updateEmployeeForm/:id', {
			templateUrl: 'app/views/templates/ef.html',
			controller: 'efController'
		})
		.otherwise({ redirectTo: '/home' })
}]);