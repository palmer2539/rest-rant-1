//dependencies
require('dotenv').config();
const express = require('express');
const app = express();

app.set('views', __dirname + '/views')
app.engine('jsx', require('express-react-views').createEngine());
app.set('view engine', 'jsx');
app.use(express.static('public'));

//routes
app.use('/places', require('./controllers/places'));

app.get('/', (req, res) => {
  res.render('home');
});

app.get('/places/editEntry', (req, res) =>{
  res.render('places/editEntry');
});

app.get('/places/newEntry', (req, res) =>{
  res.render('places/newEntry');
});

app.get('*', (req, res) => {
  res.render('error404');
});


app.listen(process.env.PORT);