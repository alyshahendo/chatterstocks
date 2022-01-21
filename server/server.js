var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var db = require('../database/database.js');
var { JSDOM } = require( 'jsdom' );
var { window } = new JSDOM( '' );
const $ = require( 'jquery' )( window );
var API_key = require('../config.js')
var app = express();

app.use(cors());
app.use(bodyParser.json());

app.get('/comment', (req, res) => {
  var stock = req.query
  return db.find(stock).sort({ created_at: 'desc' })
  .then((comments) => {
    res.send(comments);
  }).catch((err) =>{
    console.log('this is the err: ', err);
  });
});

app.get('/stock', (req, res) => {
  var ticker = req.query.stock.toUpperCase();
  var currentDate = new Date (Date.now());

  getCurrentPrice(res, ticker, currentDate, (err, currentPrice, ticker) => {
    if (err === null) {
      getCompanyInformation(ticker, (err, stockData) => {
        if (err === null) {
          res.send(200, stockData);
        } else {
          throw err;
        }
      });
    } else {
      throw err;
    }
  });

});

var getCompanyInformation = (ticker, callback) => {
  var url = `https://api.polygon.io/v3/reference/tickers/${ticker}`;

  $.ajax({
    url: url,
    method: 'GET',
    contentType: 'application/json',
    beforeSend: (xhr) => {
      xhr.setRequestHeader('Authorization', API_key);
    },
    success: (stockData) => {
      console.log(stockData);
      callback(null, stockData);
    },
    error: (err) => {
      console.log('This is the error: ', err);
      callback(err);
    }
  });
}

var getCurrentPrice = (res, ticker, currentDate, callback) => {
  var currentDateJSON = currentDate.toJSON().substring(0, 10);
  var previousDateJSON = currentDate.toJSON().substring(0, 8) + previousDate;
  var previousDate = currentDate.getDate() - 1;
  var url = `https://api.polygon.io/v2/aggs/ticker/${ticker}/range/1/day/${previousDateJSON}/${currentDateJSON}?sort=asc&limit=120`;

  $.ajax({
    url: url,
    method: 'GET',
    contentType: 'application/json',
    beforeSend: (xhr) => {
      xhr.setRequestHeader('Authorization', API_key);
    },
    success: (stockData) => {
      var currentPrice = stockData.results[0].vw;
      console.log(currentPrice);
      callback(null, currentPrice)
    },
    error: (err) => {
      console.log('This is the error: ', err);
      callback(err);
    }
  });
}

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