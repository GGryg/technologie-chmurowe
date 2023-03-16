const express = require('express');
const {MongoClient} = require('mongodb');
const PORT = 8080;

const server = express();
const client = new MongoClient('mongodb://172.17.0.2:27017/');

server.get('/', async (req, res) => {
    await client.connect();

    const data = await client.db('test').collection('chmurowe').find().toArray();
    res.status(200).json(data);

    client.close();
});

server.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
});