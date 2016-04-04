var express = require( 'express' );
var session = require('express-session');
var cors = require( 'cors' );
var bodyParser = require( 'body-parser' );
var cookieParser = require('cookie-parser');
var hash = require('bcrypt-nodejs');
var path = require('path');
var mongoose = require( 'mongoose' );
var passport = require('passport');
var localStrategy = require('passport-local').Strategy
var morgan = require('morgan');


// Controllers
var userCtrl = require( './controllers/userCtrl' ); //does not need a .js, it knows that if you are requiring it, that it should be a js file.
var config = require('./config');

//models
var User = require('./models/user.js')
var Cart = require('./models/cart.js')
var Order = require('./models/orders.js')

// Configure the local strategy for use by Passport.
//
// The local strategy require a `verify` function which receives the credentials
// (`username` and `password`) submitted by the user.  The function must verify
// that the password is correct and then invoke `cb` with a user object, which
// will be set at `req.user` in route handlers after authentication.

passport.use(new localStrategy(User.authenticate()));
  // Configure Passport authenticated session persistence.
  //
  // In order to restore authentication state across HTTP requests, Passport needs
  // to serialize users into and deserialize users out of the session.  The
  // typical implementation of this is as simple as supplying the user ID when
  // serializing, and querying the user record by ID from the database when
  // deserializing.

  passport.serializeUser(User.serializeUser());
  passport.deserializeUser(User.deserializeUser());

//initialize app

var app = express();


//initialize dependencies

app.use(session({
  secret: config.sessionSecret,
  resave: false,
  saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());
app.use( cors() );
app.use( cookieParser() );
app.use( bodyParser.json() );
app.use( morgan('combined'))
app.use( express.static( __dirname + './../public' ) ); // NOTE: tells it to host this static page for us Local through Nodemon.


//endpoints
app.use('/user/', userCtrl);

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../public', 'index.html'));
});

//CART, ORDER, USER ENDPOINTS
app.post('/api/order/', function(req, res, next) {
  // var userId = req.params.userId;
  // User.findById(userId, function(err, result) {
  //   if(err) {
  //     res.sendStatus(500);
  //   }
    var newOrder = new Order( req.body )
    newOrder.save(function(err, result) {
      return err ? res.status(500).send(err) : res.send(result);
    })
  // })
})


//
//
app.get('/api/order/', function(req, res, next) {
  Order.find(req.query, function(err, result) {
    if (err) {
      res.sendStatus(500);
    }
    res.send(result);
  })
})

// app.post('/api/cart/:user_id', function(req, res, next) {
//   User.findByIdAndUpdate(req.params.user_id, {$push: {cart: req.body}}, function(err, res) {
//     if (error) {
//       return res.status(500).json(error);
//     } else {
//       return res.json(response);
//     }
//   })
// })
//
// app.put('/api/cart/:user_id', function(req, res, next) {
//   User.findByIdAndUpdate(req.params.user_id, function(err, res) {
//     if(err) {
//       res.status(500).send(err)
//     }
//     var myUser = res;
//     var qty = req.query.qty/1;
//     var foundItem = -1;
//     myUser.cart.forEach(function(cartItem, index) {
//       if (cartItem._id === req.query.itmId) {
//         foundItem = index;
//       }
//     })
//     if(index >=0) {
//       if(qty === 0) {
//         myUser.cart.splice(index, 1);
//       } else {
//         myUser.cart[myIndex].qty = qty;
//       }
//     }
//     saveUser(myUser, req, res)
//   })
//
//   function saveUser(userToSave, req, res) {
//     userToSave.save(function(err, result) {
//       if(err) {
//         res.status(500).send(err)
//       } else {
//         res.send(result)
//       }
//     })
//   }
// })
//
// app.get('/api/user/:id', function(req, res, next) {
//   User
//     .findById(req.params.user_id)
//     .populate('cart/product')
//     .exec()
//     .then(function(results) {
//       return res.json(results);
//     }, function(err) {
//       return res.status(500).json(error);
//     })
// })

// error hndlers
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use(function(err, req, res) {
  res.status(err.status || 500);
  res.end(JSON.stringify({
    message: err.message,
    error: {}
  }));
});



//routing Variables

var port = 9000;
var mongoURI = 'mongodb://localhost:27017/Users';
//mongoDB connection
mongoose.set( 'debug', true );
mongoose.connect( mongoURI );
mongoose.connection.once( 'open', function () {
  console.log( 'Connected to mongo at: ', mongoURI );
} )
// app listen
app.listen( port, function () {
  console.log( 'listening on port ', port );
} );
