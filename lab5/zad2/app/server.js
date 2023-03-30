const express = require('express');
require('dotenv').config();

const app = express();
const PORT = 5000;

app.get('/', (req, res) => {
    res.send(`zad2 ENV VAR = ${process.env.MY_ENV_VAR}`);
});

app.listen(PORT, () => {
    console.log('The server is running on port', PORT);
});

