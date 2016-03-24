angular.module('bethSite')
.controller('loginCtrl', function($scope, $location, authService) {

  $scope.login = function () {
    //initial values
    $scope.error = false;
    $scope.disabled = true;
    //call login from service
    authService.login($scope.loginForm.username, $scope.loginForm.password)
    //handle success
    .then (function () {
      $location.path('/');
      $scope.disabled = false;
      $scope.loginForm = {};
    })
    //handle error
    .catch(function() {
      $scope.error = true;
      $scope.errorMessage = "Invalid username and/or password";
      $scope.disabled = false;
      $scope.loginForm = {};
    })
  }
})

.controller('logoutCtrl', function($scope, $location, authService) {

  $scope.logout = function () {
    //call logout from service
    authService.logout()
      .then(function() {
        $location.path('/login');
      })
  }
})

.controller('signupCtrl', function($scope, $location, authService) {

  $scope.register = function() {
    //initial values
    $scope.error = false;
    $scope.disabled = true;

    //call signup from service
    authService.register($scope.registerForm.username, $scope.registerForm.password)
    //handle success
    .then(function () {
      $location.path('/login');
      $scope.disabled = false;
      $scope.registerForm = {};
    })
    //handle error
    .then(function () {
      $scope.error = true;
      $scope.errorMessage = "Something went wrong!";
      $scope.disabled = false;
      $scope.registerForm = {};
    })
  }
})
