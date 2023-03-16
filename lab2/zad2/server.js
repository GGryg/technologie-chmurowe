const express = require('express');
const PORT = 8080;

const server = express();

server.get('/', (req, res) => {
    res.status(200).json({'data': new Date().toLocaleString()});
});

server.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
})