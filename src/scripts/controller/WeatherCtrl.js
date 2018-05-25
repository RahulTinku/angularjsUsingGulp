app.controller('WeatherCtrl', ['$scope', 'WeatherService',function($scope, WeatherService) {
	$scope.message = 'Weather Controller';

	$scope.getWeateher = function() {
		WeatherService.getWeather()
			.then(function(data) {
				$scope.message = data;
				console.log('data : ', data);
			}, function(error) {
				console.log('error : ', error);
			});
	};
}]);