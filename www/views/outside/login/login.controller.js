angular.module('myApp')

.controller('LoginCtrl', function($scope, $location, AuthService) {
	$scope.user = {
		name: '',
		password: ''
	};

	$scope.login = function() {
		AuthService.login($scope.user).then(function(msg) {
			$location.path('/home');
		}, function(errMsg) {
			alert(errMsg);
		});
	};
});