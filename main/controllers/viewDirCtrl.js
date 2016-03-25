angular.module('bethSite')
.controller('viewDirCtrl', function($scope, $sce, authService) {


  var modal = document.getElementById('myModal');

  // var img = document.getElementById('myImg');
  var modalImg = document.getElementById('img01');
  // var modalVid = document.getElementById('vid01');


  $scope.expand = function() {
    modal.style.display = 'block';
    modalImg.style.display = 'block';
    modalImg.src = '../images/' + this.img.fullPic;
  }

  $scope.closeClick = function() {
    modal.style.display = 'none';
    modalImg.style.display = 'none';
  }
})
