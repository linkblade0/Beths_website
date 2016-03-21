var express = require( 'express' );
var cors = require( 'cors' );
var bodyParser = require( 'body-parser' );
var mongoose = require( 'mongoose' );
// Controllers
var userCtrl = require( './controllers/userCtrl' ); //does not need a .js, it knows that if you are requiring it, that it should be a js file.
//initialize app
var app = express();
//initialize dependencies
app.use( cors() );
app.use( bodyParser.json() );
app.use( express.static( __dirname + './../public' ) ); // NOTE: tells it to host this static page for us Local through Nodemon.
//endpoints
// create end point
app.post( '/user', userCtrl.create );
// update end point
app.put( '/user/:id', userCtrl.update );
//delete end point
app.delete( '/user/:id', userCtrl.delete );
// read end point
// a get method that is being passed a URL, and a callback.
// user URL, using the callback method, read, on the userCtrl object.
app.get( '/users', userCtrl.read );
//callback is when you pass the name specifically without invoking it, and the app will use it itself.
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
