//二级路由
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Goods = require('../models/goods');

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

module.exports = router;
