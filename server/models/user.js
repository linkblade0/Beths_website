// user model
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');


var User = new Schema({
  username: {type: String, required: true},
  password: {type: String, required: true},
  name : {
    firstName : {type : String, required : true},
    lastName : {type : String, required : true}
  },
  email : {type : String, required : true, unique : true},
  number: {type : Number},
  address : {
    street : {type: String, required : true},
    city : {type : String, required : true},
    state : {type : String, required : true},
    zip : {type : Number, required : true},
  }
});

User.plugin(passportLocalMongoose);


module.exports = mongoose.model('users', User);
