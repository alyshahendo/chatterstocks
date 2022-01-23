const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('../database/database.js');
const { getCompanyInformation, getCurrentStockPrice, getAfterHoursStockPrice, getStockPriceAndInfo } = require('./helpers.js')
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
  const ticker = req.query.stock.toUpperCase();
  const currentDate = new Date (Date.now());
  const currentDay = currentDate.getDay();

  // Checking if the current day is Saturday or Sunday
  if (currentDay ===  6 || currentDay === 0) {
    getStockPriceAndInfo(res, ticker, currentDate, getAfterHoursStockPrice);
  } else {
    getStockPriceAndInfo(res, ticker, currentDate, getCurrentStockPrice);
  }
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