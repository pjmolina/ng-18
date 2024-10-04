var express = require('express');
var cors = require('cors');

var app = express();
app.use(express.json());

var db = [
  {
    id: 1,
    name: 'margarita',
    price: 10,
    imageUrl: 'https://imag.bonviveur.com/pizza-margarita.jpg'
  },
  {
    id: 2,
    name: 'carbonara',
    price: 12,
    imageUrl: 'https://imag.bonviveur.com/pizza-margarita.jpg'
  },
  {
    id: 3,
    name: 'piña',
    price: 9,
    imageUrl: 'https://imag.bonviveur.com/pizza-margarita.jpg'
  },
  {
    id: 4,
    name: 'diabola',
    price: 10,
    imageUrl: 'https://imag.bonviveur.com/pizza-margarita.jpg'
  },
  {
    id: 5,
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
  // await sleep(5000);
  res.json(db);
});

app.get('/pizzas/:id', async (req, res) => {
  const found = db.find((p) => p.id === +req.params.id);
  if (found) {
    res.json(found);
  } else {
    res.status(404).end();
  }
});
app.post('/pizzas', async (req, res) => {
  const pizza = req.body;
  db.push(pizza);
  res.json(pizza);
});
app.put('/pizzas/:id', async (req, res) => {
  const pizza = req.body;
  const index = db.findIndex((p) => p.id === +req.params.id);
  if (index !== -1) {
    db.splice(index, 1);
    db.push(pizza);
    res.json(pizza);
    return;
  }
  res.status(404).json({});
});
app.delete('/pizzas/:id', async (req, res) => {
  console.log(+req.params.id);
  const index = db.findIndex((p) => p.id === +req.params.id);
  if (index != -1) {
    const pizza = db[index];
    console.log(pizza);
    db.splice(index, 1);
    res.json(pizza);
    return;
  }
  res.status(404).json({});
});

console.log('Sirviendo pizzas en el puerto 3000 en GET /pizzas...');
app.listen(3000);
