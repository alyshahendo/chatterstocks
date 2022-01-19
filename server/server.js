var express = require('express');
var cors = require('cors')
var bodyParser = require('body-parser');
var app = express();

app.use(cors());
app.use(bodyParser.json());

app.post('/comment', (req, res) => {
  console.log('hello!', req.body);
  res.send();
})

app.listen(3000, () => {
  console.log('Server is connected...');
});