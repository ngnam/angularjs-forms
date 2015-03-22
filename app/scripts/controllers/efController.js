app.controller('efController', ['$scope', 'DataService', '$window', '$routeParams', function ($scope, DataService, $window, $routeParams) {

	if ($routeParams.id) {
		$scope.employee = DataService.getEmployee($routeParams.id);		
	}
	else {
		$scope.employee = { id: 0 }
	};

	$scope.editableEmployee = angular.copy($scope.employee);

	$scope.departments = [
		"administrator",
		"User",
		"Marketting",
		"ngnam"
	];

	$scope.submitForm = function () {
		if ($scope.editableEmployee.id == 0) {
			//insert new employee
			DataService.insertEmployee($scope.editableEmployee);
		}else {
			//UPDATE employee
			DataService.updateEmployee($scope.editableEmployee);
		}

		$scope.employee = angular.copy($scope.editableEmployee);
		$window.history.back();
	};

	$scope.Cancel = function () {
		$window.history.back();		
	};


}]);