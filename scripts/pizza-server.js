var express = require('express');
var app = express();

app.get('/', (req, res) => {
  res.send('hello world');
});

app.get('/time', (req, res) => {
  const t0 = new Date().toISOString();
  res.send('Hora: ' + t0);
});

app.get('/pizzas', (req, res) => {
  res.json([
    { name: 'margarita', price: 10 },
    { name: 'carbonara', price: 10 },
    { name: 'piña', price: 10 },
    { name: 'diabola', price: 10 },
    { name: 'formachi', price: 10 }
  ]);
});

console.log('Sirviendo pizzas en el puerto 3000 en GET /pizzas...');
app.listen(3000);
