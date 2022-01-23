const $ = require('jquery-jsdom');
const API_KEY = require('../config.js');

const fetchData = function (url, success, error) {
  $.ajax({
    url: url,
    method: 'GET',
    contentType: 'application/json',
    beforeSend: (xhr) => {
      xhr.setRequestHeader('Authorization', API_KEY);
    },
    success: (stockData) => {
      success(stockData);
    },
    error: (err) => {
      console.log('This is the error: ', err);
      error(err);
    }
  });
}

const getCompanyInformation = (ticker, callback) => {
  const url = `https://api.polygon.io/v3/reference/tickers/${ticker}`;
  fetchData(url,
    (stockData) => {
    callback(null, stockData);
    },
    (err) => {
      callback(err);
  });
}

const getCurrentStockPrice = (res, ticker, callback) => {
  const currentDate = new Date (Date.now());
  const currentDateJSON = currentDate.toJSON().substring(0, 10);
  const previousDate = currentDate.getDate() - 1;
  const previousDateJSON = currentDate.toJSON().substring(0, 8) + previousDate;

  const url = `https://api.polygon.io/v2/aggs/ticker/${ticker}/range/1/day/${previousDateJSON}/${currentDateJSON}?sort=asc&limit=120`;

  fetchData(url,
    (stockData) => {
      console.log(stockData);
      var currentPrice = stockData.results[0].vw;
      callback(null, currentPrice, ticker);
    },
    (err) => {
      callback(err);
  });
}

exports.getCompanyInformation = getCompanyInformation;
exports.getCurrentStockPrice = getCurrentStockPrice;