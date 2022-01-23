const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('../database/database.js');
const { getCompanyInformation, getCurrentStockPrice, getAfterHoursStockPrice, getStockPriceAndInfo } = require('./helpers.js')
const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get('/comment', (req, res, next) => {
  var stock = req.query;
  return db.find(stock).sort({ created_at: 'desc' })
  .then((comments) => {
    res.status(200).send(comments);
  }).catch((err) =>{
    next(err);
  });
});

app.get('/stock', (req, res, next) => {
  const ticker = req.query.stock.toUpperCase();
  const currentDate = new Date (Date.now());
  const currentDay = currentDate.getDay();

  // Checking if the current day is Saturday or Sunday
  if (currentDay ===  6 || currentDay === 0) {
    getStockPriceAndInfo(res, ticker, currentDate, getAfterHoursStockPrice, next);
  } else {
    getStockPriceAndInfo(res, ticker, currentDate, getCurrentStockPrice, next);
  }
});

app.post('/comment', (req, res, next) => {
  var comment = {
    username: req.body.username,
    text: req.body.text,
    stock: req.body.stock,
  };
  return db.create(comment)
  .then((comments) => {
    res.send(comments);
  }).catch((err) => {
    next(err);
  });
});

app.listen(3000, () => {
  console.log('Server is connected...');
});