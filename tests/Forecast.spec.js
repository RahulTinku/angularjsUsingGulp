describe('Angular Test Suite', function() {

	beforeEach(module('myApp'));

	describe('Forecast Controller', function() {

		var scope, ctrl;
		
		beforeEach(inject(function($controller, $rootScope) {
			scope = $rootScope.$new();
			ctrl = $controller('ForecastCtrl', { $scope:scope });
		}));

		it('should initialize the title of scope', function() {
			expect(scope.message).toBeDefined();
			expect(scope.message).toBe('Forecast Controller');
		});

	});
});