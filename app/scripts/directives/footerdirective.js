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
      	templateUrl: 'app/views/templates/footer.html'
    };
});
