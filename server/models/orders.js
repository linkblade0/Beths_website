var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var User = require('./user.js');

var orderSchema = new Schema ({
    user: { type: Schema.Types.ObjectId, ref: 'User' }
  , products: [{
      name: {type: String}
    , quantity: {type: Number, required: true, min: 1}
    }]
  , ordered: {type: Date, default: new Date()}
});

module.exports = mongoose.model("Order", orderSchema);
