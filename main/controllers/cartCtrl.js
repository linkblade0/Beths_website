angular.module('bethSite')
.controller('cartCtrl', function($scope, $http, ngCart, homeSvc, authService, isAuth, $state, ngCart) {

  ngCart.setShipping(5.00)

  if(isAuth === false) {
    $state.go('login')
  }

  $scope.userInfo = authService.getUser()

  $scope.isUser = authService.isLoggedIn();
  console.log($scope.isUser + 'From Controller')

  $scope.inNgCart = ngCart

  $scope.getCart = ngCart.getCart().items

  $scope.makeOrder = function () {
    authService.makeOrder($scope.userInfo, $scope.getCart)
  }

})
