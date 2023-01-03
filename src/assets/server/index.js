const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

let corsOptions = {
    orgim: '/',
    optionsSuccessStatus: 200,
}

app.use(cors(corsOptions));
app.use(bodyParser.json());

app.listen(3100, () => console.log('Server Started!'));

app.route('/api/items')
    .get((_req, res) => res.send(items))
    .post((req, res) => {
        let item = req.body;

        item.id = items ?
            items.map(itemIterator => itemIterator.id) + 1 : 1;

        items.push(item);

        res.status(201).send(item);
    });

app.route('/api/items/:id')
    .put((req, res) => {
        const itemId = +req.params['id'];

        const index =
            items.findIndex(itemIterator => itemIterator.id === itemId);

        const item = req.body;

        items[index] = item;

        res.status(200).send(item);
    })
    .get((req, res) => {
        const itemId = +req.params['id'];

        res.status(200).send(items.find(itemIterator => itemIterator.id === itemId));
    });

app.delete('/api/items/:id', (req, res) => {
    const itemId = +req.params['id'];

    items = items.filter(itemIterator => itemIterator.id !== itemId);

    res.status(204).send({});
});

let items = [
    {
        id: 1,
        name: 'Risotto',
        image: '../../assets/pizza.jpg',
        date: '12/12/12',
        price: 5,
        rating: 5
    },
    {
        id: 2,
        name: 'Pizza',
        image: '../../assets/pizza.jpg',
        date: '12/12/12',
        price: 5,
        rating: 5
    },
    {
        id: 3,
        name: 'Sushi',
        image: '../../assets/pizza.jpg',
        date: '12/12/12',
        price: 5,
        rating: 5
    },
    {
        id: 4,
        name: 'Steak',
        image: '../../assets/pizza.jpg',
        date: '12/12/12',
        price: 5,
        rating: 5
    },
    {
        id: 5,
        name: 'Shrimp',
        image: '../../assets/pizza.jpg',
        date: '12/12/12',
        price: 5,
        rating: 5
    },
    {
        id: 6,
        name: 'Pasta',
        image: '../../assets/pizza.jpg',
        date: '12/12/12',
        price: 5,
        rating: 5
    },
    {
        id: 7,
        name: 'Oyster',
        image: '../../assets/pizza.jpg',
        date: '12/12/12',
        price: 5,
        rating: 5
    },
    {
        id: 8,
        name: 'Lasagna',
        image: '../../assets/pizza.jpg',
        date: '12/12/12',
        price: 5,
        rating: 5
    },
];