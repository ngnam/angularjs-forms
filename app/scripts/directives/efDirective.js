'use strict';

app.directive('employeeForm', [function () {
	return {
		restrict: 'E',
		templateUrl: 'app/views/templates/ef.html'
	};
}])