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
  var searchValue = req.query.value;

  console.log('sent!', res);
  res.send(200);
});

app.listen(3000, () => {
  console.log('Server is connected...');
});