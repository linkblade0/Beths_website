angular.module('bethSite')
.service('homeSvc', function() {

  var pics = [
  {
    name: 'Angel',
    imgUrl: 'angel.jpg',
    fullPic: 'Angel-min.jpg',
    options: [
              {id: '1', size:'4x6' , price: '5.00'},
              {id: '2', size:'5x7', price: '15.00'},
              {id: '3', size:'8x10', price: '25.00'},
              {id: '4', size:'16x20', price: '60.00'}
            ],
  },
  {
    name: 'Bird',
    imgUrl: 'birds.jpg',
    fullPic: 'Birdsi.jpg',
    options: [
              {id: '1', size:'4x6', price: '5.00'},
              {id: '2', size:'5x7', price: '15.00'},
              {id: '3', size:'8x10', price: '25.00'},
              {id: '4', size:'16x20', price: '60.00'}
            ],
  },
  {
    name: 'Blue Dragon',
    imgUrl: 'blue_dragon.jpg',
    fullPic: 'BlueDragon-min.jpg',
    options: [
              {id: '1', size: 'pending'}
    ]
  },
  {
    name: 'Butterfly',
    imgUrl: 'butterfly.jpg',
    fullPic: 'Butterfly-min.jpg',
    options: [
              {id: '1', size:'4x6', price: '5.00'},
              {id: '2', size:'5x7', price: '15.00'},
              {id: '3', size:'8x10', price: '25.00'},
              {id: '4', size:'16x20', price: '60.00'}
            ],
    selectedOption: {id: '3', size: '8x10 25.00'}
  },
  {
    name: 'Dance of the Cauldron',
    imgUrl: 'cauldron.jpg',
    fullPic: 'Cauldron-min.jpg',
    options: [
              {id: '1', size:'4x6', price: '5.00'},
              {id: '2', size:'5x7', price: '15.00'},
              {id: '3', size:'8x10', price: '25.00'},
              {id: '4', size:'16x20', price: '60.00'}
            ],
  },
  {
    name: 'The Dress',
    imgUrl: 'dress.jpg',
    fullPic: 'Dress-min.jpg',
    options: [
              {id: '1', size:'4x6', price: '5.00'},
              {id: '2', size:'5x7', price: '15.00'},
              {id: '3', size:'8x10', price: '25.00'},
              {id: '4', size:'16x20', price: '60.00'}
            ],
  },
  {
    name: 'Green Dragon',
    imgUrl: 'green_dragon.jpg',
    fullPic: 'Dragon1-min.jpg',
    options: [
              {id: '1', size:'4x6', price: '5.00'},
              {id: '2', size:'5x7', price: '15.00'},
              {id: '3', size:'8x10', price: '25.00'},
              {id: '4', size:'16x20', price: '60.00'}
            ],
  },
  {
    name: 'Mermaid',
    imgUrl: 'mermaid.jpg',
    fullPic: 'Mermaid-min.jpg',
    options: [
              {id: '1', size:'4x6', price: '5.00'},
              {id: '2', size:'5x7', price: '15.00'},
              {id: '3', size:'8x10', price: '25.00'},
              {id: '4', size:'16x20', price: '60.00'}
            ],
  },
  {
    name: 'Miracles',
    imgUrl: 'miracles.jpg',
    fullPic: 'miracles-min.jpg',
    options: [
            {id: '0', size: null, price: null},
            {id: '1', size: 'pending'}
    ]
  },
  {
    name: 'The Fool',
    imgUrl: 'one-with-nature.jpg',
    fullPic: 'The_Fool-min.jpg',
    options: [
              {id: '1', size:'4x6', price: '5.00'},
              {id: '2', size:'5x7', price: '15.00'},
              {id: '3', size:'8x10', price: '25.00'},
              {id: '4', size:'16x20', price: '60.00'}
            ],
  },
  {
    name: 'Owls',
    imgUrl: 'owls.jpg',
    fullPic: 'Owls-min.jpg',
    options: [
              {id: '1', size:'4x6', price: '5.00'},
              {id: '2', size:'5x7', price: '15.00'},
              {id: '3', size:'8x10', price: '25.00'},
              {id: '4', size:'16x20', price: '60.00'}
            ],
  },
  {
    name: 'Rainbow',
    imgUrl: 'rainbow2.jpg',
    fullPic: 'Rainbow2-min.jpg',
    options: [
              {id: '1', size:'4x6', price: '5.00'},
              {id: '2', size:'5x7', price: '15.00'},
              {id: '3', size:'8x10', price: '25.00'},
              {id: '4', size:'16x20', price: '60.00'}
            ],
  },
  {
    name: 'Red Dragon',
    imgUrl: 'red_dragon.jpg',
    fullPic: 'Red_Dragon-min.jpg',
    options: [
              {id: '1', size:'4x6', price: '5.00'},
              {id: '2', size:'5x7', price: '15.00'},
              {id: '3', size:'8x10', price: '25.00'},
              {id: '4', size:'16x20', price: '60.00'}
            ],
  },
  {
    name: 'Koi',
    imgUrl: 'red_fish.jpg',
    fullPic: 'Koi-min.jpg',
    options: [
              {id: '1', size:'4x6', price: '5.00'},
              {id: '2', size:'5x7', price: '15.00'},
              {id: '3', size:'8x10', price: '25.00'},
              {id: '4', size:'16x20', price: '60.00'}
            ],
  },
  {
    name: 'Poppies',
    imgUrl: 'red_flowers.jpg',
    fullPic: 'Poppies-min.jpg',
    options: [
              {id: '1', size:'4x6', price: '5.00'},
              {id: '2', size:'5x7', price: '15.00'},
              {id: '3', size:'8x10', price: '25.00'},
              {id: '4', size:'16x20', price: '60.00'}
            ],
  },
  {
    name: 'Vines',
    imgUrl: 'tree_fairy.jpg',
    fullPic: 'Vines-min.jpg',
    options: [
              {id: '1', size:'4x6', price: '5.00'},
              {id: '2', size:'5x7', price: '15.00'},
              {id: '3', size:'8x10', price: '25.00'},
              {id: '4', size:'16x20', price: '60.00'}
            ],
  }
]

  this.getPic = function() {
    return pics;
  }

})
