const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('../database/database.js');
const { JSDOM } = require( 'jsdom' );
const { window } = new JSDOM( '' );
const API_KEY = require('../config.js');
const { getCompanyInformation, getCurrentStockPrice } = require('./helpers.js')
const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get('/comment', (req, res) => {
  var stock = req.query;
  return db.find(stock).sort({ created_at: 'desc' })
  .then((comments) => {
    res.send(200, comments);
  }).catch((err) =>{
    // add error handling
    console.log('this is the err: ', err);
  });
});

app.get('/stock', (req, res) => {
  var ticker = req.query.stock.toUpperCase();
  var stockData = {};
  getCurrentStockPrice(res, ticker, (err, currentPrice, ticker) => {
    if (err === null) {
      stockData.currentPrice = currentPrice;
      getCompanyInformation(ticker, (err, info) => {
        if (err === null) {
          stockData.info = info;
          res.send(200, stockData);
        } else {
          throw err;
        }
      });
    } else {
      throw err;
      res.end();
    }
  });

});

app.post('/comment', (req, res) => {
  var comment = {
    username: req.body.username,
    text: req.body.text,
    stock: req.body.stock,
  };
  return db.create(comment)
  .then((comments) => {
    // db.find({ stock: })
    res.send(comments);
  }).catch((err) => {
    console.log('this is the err: ', err);
  });
});

app.listen(3000, () => {
  console.log('Server is connected...');
});