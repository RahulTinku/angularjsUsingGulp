app.service('WeatherService', ['$http', function($http) {
	this.getWeather = function() {
		return $http({
			method: 'GET',
			url : 'http://api.openweathermap.org/data/2.5/forecast?q=' + 'ranchi'
						+ '&appid=78cd473d16d4bbce10b44292e91f61a8&units=imperial'
		});
	};
}]);