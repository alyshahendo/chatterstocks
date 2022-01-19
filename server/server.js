var express = require('express');
var cors = require('')
var app = express();

app.post('/comment', () => {
  console.log('hello!');
  res.send();
})

app.listen(3000, () => {
  console.log('Server is connected...');
});