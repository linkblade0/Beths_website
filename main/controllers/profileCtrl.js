angular.module('bethSite')
.controller('profileCtrl', function($scope, authService, $state, isAuth) {

	if(isAuth === false) {
		$state.go('login')
	}


	$scope.isUser = authService.isLoggedIn();
  console.log($scope.isUser + 'From Controller')


	$scope.user = authService.getUser();
	console.log($scope.user + ' from controller')


})
