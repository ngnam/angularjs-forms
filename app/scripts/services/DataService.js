app.factory('DataService', [function () {	
	//getEmployee
	var getEmployee = function (id) {
		if (id == 123) {
			return {				
				id: 123,
				fullName: 'nguyen van nam',
				notes: 'laptrinhvien',
				department: 'ngnam',
				dateHired: '2/3/2015',
				mytime: '2/3/2015 9:45 AM',
				rate: 5,
				isUnderNonComplete: false,
				perkCard: true,
				perkStock: false,
				perkSixWeek: true,
				payrollType: "none"				
			};
		}
		return console.log('no data');
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