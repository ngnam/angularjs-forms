'use strict';

/**
 * @ngdoc directive
 * @name angularjsFormsApp.directive:headerDirective
 * @description
 * # headerDirective
 */
var app = angular.module('angularFormsApp');
app.directive('headerDirective', function () {
	return {
		restrict: 'E',
		templateUrl: 'app/views/templates/header.html'
	};
});
