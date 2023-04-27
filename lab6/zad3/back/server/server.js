const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const PORT = 5000;
const app = express();

app.use(cors());

mongoose.connect('mongodb://database:27017/lab6', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.log(err));

const someSchema = new mongoose.Schema({
    content: String,
    number: Number,
});

const Some = mongoose.model('Some', someSchema);

app.get('/api/some', (req, res) => {
    Some.find({})
        .then((somes) => res.json(somes))
        .catch((err) => {
            console.log(err);
            res.status(400).send('Error');
        });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});