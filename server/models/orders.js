var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var orderSchema = new Schema ({
    user: { type: Schema.Types.ObjectId, ref: 'User' }
  , products: [{
      item: {type: String}
    , quantity: {type: Number, required: true, min: 1}
    }]
  , ordered: {type: Date, default: new Date()}
});

module.exports = mongoose.model("Order", orderSchema);
