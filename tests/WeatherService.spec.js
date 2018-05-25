describe('Weather Service', function() {

	var weather, scope, http, httpBackend, requestHandler;
	var response = [{"coord":{"lon":85.33,"lat":23.37},"weather":[{"id":721,"main":"Haze","description":"haze","icon":"50d"}],"base":"stations","main":{"temp":93.2,"pressure":1008,"humidity":38,"temp_min":93.2,"temp_max":93.2},"visibility":4000,"wind":{"speed":3.36,"deg":250},"clouds":{"all":32},"dt":1527226200,"sys":{"type":1,"id":7797,"message":0.005,"country":"IN","sunrise":1527204814,"sunset":1527253073},"id":1258526,"name":"Ranchi","cod":200}];

	beforeEach(angular.mock.module('myApp'));

	beforeEach(inject(function($rootScope, _WeatherService_ , _$http_) {
		scope = $rootScope.$new();
		weather = _WeatherService_;
		http = _$http_;
	}));

	// beforeEach(inject(function($injector) {
	// 	httpBackend = $injector.get('$httpBackend');
	// 	requestHandler = httpBackend.when('GET', 'http://api.openweathermap.org/data/2.5/weather?q=ranchi&appid=78cd473d16d4bbce10b44292e91f61a8&units=imperial')
	// 								.respond(200);
	// }));

	it('should exists', function() {
		expect(weather).toBeDefined();
	});

	it('should call the api and get respone', function() {

		// http.get('http://api.openweathermap.org/data/2.5/weather?q=ranchi&appid=78cd473d16d4bbce10b44292e91f61a8&units=imperial')
		// 	.then(function(data){
		// 		scope.message = data;
		// 	},function(error) {
		// 		scope.message = error;
		// 	});

		weather.getWeather().then(function(data) {
			console.log(data);
			expect(data).toBeEqual(response);
		});

		  // httpBackend
		  //   .expect('GET', 'http://api.openweathermap.org/data/2.5/weather?q=ranchi&appid=78cd473d16d4bbce10b44292e91f61a8&units=imperial')
		  //   .respond(200, response);

		 // expect(httpBackend.flush).not.toThrow();
		 // expect(scope.message).toBeDefined();
	});

	it('has a dummy spec to test 2+2', function() {
		expect(2+2).toEqual(4)
	});
});