var app = angular.module('myApp', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl : 'views/home.html',
			controller : 'HomeCtrl'
		})
		.when('/weather', {
			templateUrl : 'views/weather.html',
			controller : 'WeatherCtrl'
		})
		.when('/forecast', {
			templateUrl : 'views/forecast.html',
			controller : 'ForecastCtrl'
		});
}]);