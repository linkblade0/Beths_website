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

// Configure the local strategy for use by Passport.
//
// The local strategy require a `verify` function which receives the credentials
// (`username` and `password`) submitted by the user.  The function must verify
// that the password is correct and then invoke `cb` with a user object, which
// will be set at `req.user` in route handlers after authentication.

  // passport.use(new localStrategy(
  //   function(username, password, cb) {
  //     db.users.findByUsername(username, function(err, user) {
  //       if (err) {return cb(err); }
  //       if (!user) {return cb(null, false); }
  //       if (user.password != password) {return cb(null, false); }
  //       return cb(null, user);
  //     });
  // }));
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

// create end point
// app.post( '/user', userCtrl.create );
// // update end point
// app.put( '/user/:id', userCtrl.update );
// //delete end point
// app.delete( '/user/:id', userCtrl.delete );
// // read end point
// // a get method that is being passed a URL, and a callback.
// // user URL, using the callback method, read, on the userCtrl object.
// app.get( '/users', userCtrl.read );
// //callback is when you pass the name specifically without invoking it, and the app will use it itself.


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
