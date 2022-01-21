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

app.get('/search', (req, res) => {
  var searchValue = encodeURIComponent(req.query.value);
  var url = `https://api.twitter.com/2/tweets/search/recent?query=${searchValue}&tweet.fields=created_at&max_results=50 -H`;
  $.ajax({
    url: url,
    method: 'GET',
    contentType: 'application/json',
    beforeSend: (xhr) => {
      xhr.setRequestHeader('Authorization', API_key);
    },
    success: (tweets) => {
      console.log('sent!', tweets);
      res.send(200);
    },
    error: (err) => {
      console.log('This is the error: ', err);
    }
  });

});

app.listen(3000, () => {
  console.log('Server is connected...');
});