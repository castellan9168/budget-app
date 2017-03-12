angular.module('myApp', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
	$routeProvider
	.when('/login', {
		templateUrl: 'views/outside/login/login.html',
		controller: 'LoginCtrl'
	})
	.when('/register', {
		templateUrl: 'views/outside/register/register.html',
		controller: 'RegisterCtrl'
	})
	.when('/home', {
		templateUrl: 'views/home/home.html',
		controller: 'HomeCtrl'
	})
	.otherwise({
        redirectTo: '/login'
    });
}])

.controller('mainCtrl', function($scope) {
	$scope.greeting = 'Hello user';
})

.run(function($rootScope, $location, AuthService, AUTH_EVENTS) {
	$rootScope.$on('$routeChangeStart', function(event, next) {
		if(!AuthService.isAuthenticated) {
			console.log(next.templateUrl);
			if (next.templateUrl !== 'views/outside/login/login.html' && next.templateUrl !== 'views/outside/register/register.html') {
				event.preventDefault();
				$location.path('/login');
			}
		}
	});
});