'use strict';

/**
 * @ngdoc directive
 * @name angularFormsApp.directive:footerDirective
 * @description
 * # footerDirective
 */
var app = angular.module('angularFormsApp');
app.directive('footerDirective', function () {
    return {
    	restrict: 'E',
      	templateUrl: 'file:///home/nam/git/angularjs-forms/app/views/templates/header.html'
    };
});
