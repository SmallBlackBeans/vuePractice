var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var productSchema = new Schema({
  productId: { type: String },
  productName: String,
  salePrice: Number,
  productImage: String,
  checked: String,
  productNum: Number
});

//匿名输出
module.exports = mongoose.model('Good', productSchema);
