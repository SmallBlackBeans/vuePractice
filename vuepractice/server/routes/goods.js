//二级路由
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Goods = require('../models/goods');
var User = require('../models/user');

// 链接数据库
mongoose.connect('mongodb://127.0.0.1:27017/db_demo', {
  useMongoClient: true
});

// 监听
mongoose.connection.on('connected', function() {
  console.log('mongoDB connected success');
});

mongoose.connection.on('error', function() {
  console.log('mongoDB connected error');
});

mongoose.connection.on('disconnected', function() {
  console.log('mongoDB connected disconnected');
});

//http://localhost:8080/goods?page=1&pageSize=10&sort=1
router.get('/', function(req, res, next) {
  let page = parseInt(req.param('page'));
  let pageSize = parseInt(req.param('pageSize'));
  let sort = req.param('sort');
  let skip = (page - 1) * pageSize;
  let param = {};
  let goodsModel = Goods.find(param)
    .skip(skip)
    .limit(pageSize);
  goodsModel.sort({ salePrice: sort });
  goodsModel.exec(function(err, doc) {
    if (err) {
      res.json({
        status: '1',
        msg: err.message
      });
    } else {
      res.json({
        status: '0',
        msg: '',
        result: {
          count: doc.length,
          list: doc
        }
      });
    }
  });
});

// 加入购物车
router.post('/addCart', function(req, res, next) {
  var userId = '123456',
    productId = req.body.productId;
  User.findOne({ userId: userId }, function(err, userDoc) {
    if (err) {
      res.json({
        status: '1',
        msg: err.message
      });
    } else {
      console.log('userDoc:' + userDoc);
      if (userDoc) {
        Goods.findOne({ productId: productId }, function(err, goodDoc) {
          if (err) {
            res.json({
              status: '1',
              msg: err.message
            });
          } else {
            if (goodDoc) {
              goodDoc.productNum = 1;
              goodDoc.checkd = 1;
              userDoc.cartList.push(goodDoc);
              userDoc.save(function(error, doc2) {
                if (error) {
                  res.json({
                    status: '1',
                    msg: err.message
                  });
                } else {
                  res.json({
                    status: 0,
                    msg: '添加成功'
                  });
                }
              });
            }
          }
        });
      }
    }
  });
});

module.exports = router;
