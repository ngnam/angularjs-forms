app.factory('DataService', [function () {	
	//getEmployee
	var getEmployee = function (id) {
		if (id == 123) {
			return {
				employee: {
					id: 123,
					fullName: 'nguyen van nam',
					notes: 'laptrinhvien',
					department: 'ngnam',
					perkCard: true,
					perkStock: false,
					perkSixWeek: true,
					payrollType: "none"
				}
			};
		}else {
			return underfined;
		}
	};
	//insertEmployee
	var insertEmployee = function (newEmployee) {
		return true;
	};
	//updateEmployee
	var updateEmployee = function (employee) {
		return true;
	};
	return {
		insertEmployee: insertEmployee,
		updateEmployee: updateEmployee,
		getEmployee: getEmployee
	};

}])