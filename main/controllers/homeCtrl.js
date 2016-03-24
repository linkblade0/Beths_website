angular.module('bethSite')
.controller('homeCtrl', function($scope, homeSvc) {

  $scope.home = {name: 'Welcome to Dream B'};

  $scope.image = homeSvc.getPic();

})
