'use strict';

/**
 * @ngdoc overview
 * @name angularFormsAppApp
 * @description
 * # angularFormsAppApp
 *
 * Main module of the application.
 */
var app = angular.module('angularFormsApp', ['ngRoute','ui.bootstrap','ngTouch']); 
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
		.when('/datapickerdemo', {
			templateUrl: 'app/views/datapickerdemo.html',
			controller: 'DatepickerDemoCtrl'
		})
		.when('/timepickerdemo', {
			templateUrl: 'app/views/timepickerdemo.html',
			controller: 'TimepickerDemoCtrl'
		})
		.when('/typeaheaddemo', {
			templateUrl: 'app/views/typeaheaddemo.html',
			controller: 'TypeaheaddemoCtrl'
		})
		.when('/ratingdemo', {
			templateUrl: 'app/views/ratingdemo.html',
			controller: 'RatingDemoCtrl'
		})
		.otherwise({ redirectTo: '/home' })
}]);