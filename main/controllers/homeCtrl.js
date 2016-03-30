angular.module('bethSite')
.controller('homeCtrl', function($scope, homeSvc) {

  $scope.home = {name: 'Welcome to Dream B'};

  $scope.image = homeSvc.getPic();

  // $scope.addCart = function(){
  //   if(!anything || !model.id && !user) {
  //     console.log("Please log in and select size/number desired.");
  //   } else if (!user) {
  //     //link to log in page
  //   } else {
  //     var order = {
  //       product: 'this.imgUrl',
  //       //size: '',
  //       //price: '',
  //       //number requested: ''
  //     }
  //     cartSvc.cart.push(order);
  //   }
  // }

})
