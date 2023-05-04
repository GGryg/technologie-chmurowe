const express = require('express');
const Redis = require('redis');

const app = express();
const PORT = 3000;

const client = Redis.createClient({
    url: "redis://redis:6379"
})

client.on("error", (err) => {
    console.log(err);
})

client.on("connect", () => {
    console.log("Connected to redis");
})

client.connect();

app.post("/messages", async (req, res) => {
    const { data } = req.body;

    await client.lPush("messages", data)
        .catch((err) => {
            console.log(err);
        });

    res.send("Done");
});

app.get('/messages', async (req, res) => {
    const messages = await client.lRange("messages", 0, -1).catch((err) => console.log(err));
    res.send(messages);
});

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
})