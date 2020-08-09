const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.render('hello.ejs');
app.use(express.static('public'));

});

app.get('/top', (req, res) => {
  res.render('top.ejs');
});

app.get('/index', (req, res) => {
  res.render('index.ejs');
});

app.listen(3000);
