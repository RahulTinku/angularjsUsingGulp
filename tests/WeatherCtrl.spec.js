describe('Weather controller suite', function() {

	beforeEach(module('myApp'));

	describe('weather controller', function() {

		var scope, ctrl;

		beforeEach(inject(function($controller, $rootScope) {
			scope = $rootScope.$new();
			ctrl = $controller('WeatherCtrl', { $scope : scope });
		}));

		it('should test the api call response in controller', function() {
			scope.getWeateher();

			expect(scope.message).toBeDefined();
		});
	});
});