angular.module('bethSite')
.service('homeSvc', function() {

  var pics = [
  {
    imgUrl: 'angel.jpg',
    fullPic: 'Angel-min.jpg'
  },
  {
    imgUrl: 'birds.jpg',
    fullPic: 'Birdsi.jpg'
  },
  {
    imgUrl: 'blue_dragon.jpg',
    fullPic: 'BlueDragon-min.jpg'
  },
  {
    imgUrl: 'butterfly.jpg',
    fullPic: 'Butterfly-min.jpg'
  },
  {
    imgUrl: 'cauldron.jpg',
    fullPic: 'Cauldron-min.jpg'
  },
  {
    imgUrl: 'dress.jpg',
    fullPic: 'Dress-min.jpg'
  },
  {
    imgUrl: 'green_dragon.jpg',
    fullPic: 'Dragon1-min.jpg'
  },
  {
    imgUrl: 'mermaid.jpg',
    fullPic: 'Mermaid-min.jpg'
  },
  {
    imgUrl: 'miracles.jpg',
    fullPic: 'miracles-min.jpg'
  },
  {
    imgUrl: 'one-with-nature.jpg',
    fullPic: 'The_Fool-min.jpg'
  },
  {
    imgUrl: 'owls.jpg',
    fullPic: 'Owls-min.jpg'
  },
  {
    imgUrl: 'rainbow2.jpg',
    fullPic: 'Rainbow2-min.jpg'
  },
  {
    imgUrl: 'red_dragon.jpg',
    fullPic: 'Red_Dragon-min.jpg'
  },
  {
    imgUrl: 'red_fish.jpg',
    fullPic: 'Koi-min.jpg'
  },
  {
    imgUrl: 'red_flowers.jpg',
    fullPic: 'Poppies-min.jpg'
  },
  {
    imgUrl: 'tree_fairy.jpg',
    fullPic: 'Vines-min.jpg'
  }
]

  this.getPic = function() {
    return pics;
  }

})
