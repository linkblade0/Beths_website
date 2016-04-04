angular.module('bethSite')
.service('homeSvc', function() {

  var pics = [
  {
    name: 'Angel',
    imgUrl: 'angel.jpg',
    fullPic: 'Angel-min.jpg',
    options: [
              {id: '5', size:'3x3 - $2.00' , price: {amount: '1.00', print: 'doesnt matter'}},
              {id: '1', size:'4x6 - $5.00' , price: {amount: '5.00', print:'4x6'}},
              {id: '2', size:'5x7 - $15.00', price: {amount: '15.00', print:'5x7'}},
              {id: '3', size:'8x10 - $25.00', price: {amount: '25.00', print:'8x10'}},
              {id: '4', size:'16x20 - $60.00', price: {amount: '60.00', print:'16x20'}}
            ],
  },
  {
    name: 'Bird',
    imgUrl: 'birds.jpg',
    fullPic: 'Birdsi.jpg',
    options: [
              {id: '1', size:'4x6 - $5.00', price: {amount: '5.00', print:'4x6'}},
              {id: '2', size:'5x7 - $15.00', price: {amount: '15.00', print:'5x7'}},
              {id: '3', size:'8x10 - $25.00', price: {amount: '25.00', print:'8x10'}},
              {id: '4', size:'16x20 - $60.00', price: {amount: '60.00', print:'16x20'}}
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
              {id: '1', size:'4x6 - $5.00', price: {amount: '5.00', print:'4x6'}},
              {id: '2', size:'5x7 - $15.00', price: {amount: '15.00', print:'5x7'}},
              {id: '3', size:'8x10 - $25.00', price: {amount: '25.00', print:'8x10'}},
              {id: '4', size:'16x20 - $60.00', price: {amount: '60.00', print:'16x20'}}
            ],
    selectedOption: {id: '3', size: '8x10 25.00'}
  },
  {
    name: 'Dance of the Cauldron',
    imgUrl: 'cauldron.jpg',
    fullPic: 'Cauldron-min.jpg',
    options: [
              {id: '1', size:'4x6 - $5.00', price: {amount: '5.00', print:'4x6'}},
              {id: '2', size:'5x7 - $15.00', price: {amount: '15.00', print:'5x7'}},
              {id: '3', size:'8x10 - $25.00', price: {amount: '25.00', print:'8x10'}},
              {id: '4', size:'16x20 - $60.00', price: {amount: '60.00', print:'16x20'}}
            ],
  },
  {
    name: 'The Dress',
    imgUrl: 'dress.jpg',
    fullPic: 'Dress-min.jpg',
    options: [
              {id: '1', size:'4x6 - $5.00', price: {amount: '5.00', print:'4x6'}},
              {id: '2', size:'5x7 - $15.00', price: {amount: '15.00', print:'5x7'}},
              {id: '3', size:'8x10 - $25.00', price: {amount: '25.00', print:'8x10'}},
              {id: '4', size:'16x20 - $60.00', price: {amount: '60.00', print:'16x20'}}
            ],
  },
  {
    name: 'Green Dragon',
    imgUrl: 'green_dragon.jpg',
    fullPic: 'Dragon1-min.jpg',
    options: [
              {id: '1', size:'4x6 - $5.00', price: {amount: '5.00', print:'4x6'}},
              {id: '2', size:'5x7 - $15.00', price: {amount: '15.00', print:'5x7'}},
              {id: '3', size:'8x10 - $25.00', price: {amount: '25.00', print:'8x10'}},
              {id: '4', size:'16x20 - $60.00', price: {amount: '60.00', print:'16x20'}}
            ],
  },
  {
    name: 'Mermaid',
    imgUrl: 'mermaid.jpg',
    fullPic: 'Mermaid-min.jpg',
    options: [
              {id: '1', size:'4x6 - $5.00', price: {amount: '5.00', print:'4x6'}},
              {id: '2', size:'5x7 - $15.00', price: {amount: '15.00', print:'5x7'}},
              {id: '3', size:'8x10 - $25.00', price: {amount: '25.00', print:'8x10'}},
              {id: '4', size:'16x20 - $60.00', price: {amount: '60.00', print:'16x20'}}
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
              {id: '1', size:'4x6 - $5.00', price: {amount: '5.00', print:'4x6'}},
              {id: '2', size:'5x7 - $15.00', price: {amount: '15.00', print:'5x7'}},
              {id: '3', size:'8x10 - $25.00', price: {amount: '25.00', print:'8x10'}},
              {id: '4', size:'16x20 - $60.00', price: {amount: '60.00', print:'16x20'}}
            ],
  },
  {
    name: 'Owls',
    imgUrl: 'owls.jpg',
    fullPic: 'Owls-min.jpg',
    options: [
              {id: '1', size:'4x6 - $5.00', price: {amount: '5.00', print:'4x6'}},
              {id: '2', size:'5x7 - $15.00', price: {amount: '15.00', print:'5x7'}},
              {id: '3', size:'8x10 - $25.00', price: {amount: '25.00', print:'8x10'}},
              {id: '4', size:'16x20 - $60.00', price: {amount: '60.00', print:'16x20'}}
            ],
  },
  {
    name: 'Rainbow',
    imgUrl: 'rainbow2.jpg',
    fullPic: 'Rainbow2-min.jpg',
    options: [
              {id: '1', size:'4x6 - $5.00', price: {amount: '5.00', print:'4x6'}},
              {id: '2', size:'5x7 - $15.00', price: {amount: '15.00', print:'5x7'}},
              {id: '3', size:'8x10 - $25.00', price: {amount: '25.00', print:'8x10'}},
              {id: '4', size:'16x20 - $60.00', price: {amount: '60.00', print:'16x20'}}
            ],
  },
  {
    name: 'Red Dragon',
    imgUrl: 'red_dragon.jpg',
    fullPic: 'Red_Dragon-min.jpg',
    options: [
              {id: '1', size:'4x6 - $5.00', price: {amount: '5.00', print:'4x6'}},
              {id: '2', size:'5x7 - $15.00', price: {amount: '15.00', print:'5x7'}},
              {id: '3', size:'8x10 - $25.00', price: {amount: '25.00', print:'8x10'}},
              {id: '4', size:'16x20 - $60.00', price: {amount: '60.00', print:'16x20'}}
            ],
  },
  {
    name: 'Koi',
    imgUrl: 'red_fish.jpg',
    fullPic: 'Koi-min.jpg',
    options: [
              {id: '1', size:'4x6 - $5.00', price: {amount: '5.00', print:'4x6'}},
              {id: '2', size:'5x7 - $15.00', price: {amount: '15.00', print:'5x7'}},
              {id: '3', size:'8x10 - $25.00', price: {amount: '25.00', print:'8x10'}},
              {id: '4', size:'16x20 - $60.00', price: {amount: '60.00', print:'16x20'}}
            ],
  },
  {
    name: 'Poppies',
    imgUrl: 'red_flowers.jpg',
    fullPic: 'Poppies-min.jpg',
    options: [
              {id: '1', size:'4x6 - $5.00', price: {amount: '5.00', print:'4x6'}},
              {id: '2', size:'5x7 - $15.00', price: {amount: '15.00', print:'5x7'}},
              {id: '3', size:'8x10 - $25.00', price: {amount: '25.00', print:'8x10'}},
              {id: '4', size:'16x20 - $60.00', price: {amount: '60.00', print:'16x20'}}
            ],
  },
  {
    name: 'Vines',
    imgUrl: 'tree_fairy.jpg',
    fullPic: 'Vines-min.jpg',
    options: [
              {id: '1', size:'4x6 - $5.00', price: {amount: '5.00', print:'4x6'}},
              {id: '2', size:'5x7 - $15.00', price: {amount: '15.00', print:'5x7'}},
              {id: '3', size:'8x10 - $25.00', price: {amount: '25.00', print:'8x10'}},
              {id: '4', size:'16x20 - $60.00', price: {amount: '60.00', print:'16x20'}}
            ],
  }
]

  this.getPic = function() {
    return pics;
  }

  this.info = [

  ]


})
