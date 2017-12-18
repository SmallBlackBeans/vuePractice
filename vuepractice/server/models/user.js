var mongoose = require('mongoose');

var productSchema = new mongoose.Schema({
  userId: { type: String },
  userName: String,
  userPwd: Number,
  orderList: Array,
  cartList: [
    {
      productId: String,
      salePrice: String,
      productName: String,
      checked: String,
      productImage: String
    }
  ],
  addressList: Array
});

//匿名输出
module.exports = mongoose.model('User', productSchema);
