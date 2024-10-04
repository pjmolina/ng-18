var express = require('express');
var cors = require('cors');

var app = express();

var db = [
  {
    name: 'margarita',
    price: 10,
    imageUrl: 'https://imag.bonviveur.com/pizza-margarita.jpg'
  },
  {
    name: 'carbonara',
    price: 12,
    imageUrl: 'https://imag.bonviveur.com/pizza-margarita.jpg'
  },
  {
    name: 'piña',
    price: 9,
    imageUrl: 'https://imag.bonviveur.com/pizza-margarita.jpg'
  },
  {
    name: 'diabola',
    price: 10,
    imageUrl: 'https://imag.bonviveur.com/pizza-margarita.jpg'
  },
  {
    name: 'formachi',
    price: 14,
    imageUrl: 'https://imag.bonviveur.com/pizza-margarita.jpg'
  }
];

function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

var corsOptions = {
  origin: 'http://localhost:4200',
  maxAge: 86400
};

app.use(cors(corsOptions));

app.get('/', (req, res) => {
  res.send('hello world');
});

app.get('/time', (req, res) => {
  const t0 = new Date().toISOString();
  res.send('Hora: ' + t0);
});

app.get('/pizzas', async (req, res) => {
  await sleep(5000);
  res.json(db);
});

app.get('/pizzas/:name', async (req, res) => {
  const found = db.find((p) => p.name === req.params.name);
  if (found) {
    res.json(found);
  } else {
    res.status(404);
  }
});
app.post('/pizzas', async (req, res) => {
  const pizza = req.body;
  db.push(pizza);
});
app.put('/pizzas/:name', async (req, res) => {
  const pizza = req.body;
  const found = db.find((p) => p.name === req.params.name);
  if (found) {
    found = pizza;
  }
});
app.delete('/pizzas/:name', async (req, res) => {
  const found = db.findIndex((p) => p.name === req.params.name);
  if (found != -1) {
    db.splice(index, 1);
  }
});

console.log('Sirviendo pizzas en el puerto 3000 en GET /pizzas...');
app.listen(3000);
