angular.module('bethSite')
.controller('contactCtrl', function($scope, authService) {

  $scope.sendFrickenMessage = function(data) {
    $.ajax({
        url: "https://formspree.io/josephlago90@gmail.com",
        method: "POST",
        data: {
          name: data.name,
          email: data.email,
          subject: data.subject,
          message: data.message,
        } ,
        dataType: "json"
    });
    alert('Thanks for the e-mail!');
    return false;
  }

  $scope.isUser = authService.isLoggedIn();
  console.log($scope.isUser + 'From Controller')

})
