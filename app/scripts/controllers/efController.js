app.controller('efController', ['$scope', 'efService', function ($scope, efService) {
	$scope.employee = efService.employee;
}]);