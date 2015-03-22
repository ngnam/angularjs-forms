app.controller('HomeController', ['$scope', '$location','DataService', function ($scope, $location, DataService) {
	
	$scope.ShowCreateEmployeeForm = function () {
		$location.path('/newEmployeeForm');
	};

	$scope.ShowUpdateEmployeeForm = function (id) {
		$location.path('/updateEmployeeForm/' + id);
	};
}]);