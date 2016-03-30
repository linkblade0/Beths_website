angular.module('bethSite')
.controller('cartCtrl', function($scope, $http, ngCart) {

  ngCart.setTaxRate(2.5)
  ngCart.setShipping(5.00)

})
