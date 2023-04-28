const express = require('express');
const mongoose = require('mongoose')
const {Schema} = mongoose;

const app = express();
const PORT = 3003;

const connectDB = async () =>{
    try{
        mongoose.set("strictQuery", false);
        await mongoose.connect("mongodb://db:27017/test");
        console.log('Successfully connected to MongoDB');
    }
    catch (err) {
        console.error(err);
        process.exit(1);
    }
}

const User = new Schema({
    name: {
        type: String
    },
    last_name: {
        type: String
    }
});

const Model = mongoose.model('User', User);

app.get("/users", async (req, res) => {
    try{
        const users = await Model.find({});

        return res.status(200).json(users);
    }
    catch (err) {
        console.error(err);
        return res.status(500).json('error');
    }
});

app.listen(PORT, () => {
    connectDB();
    console.log(`server is running on port ${PORT}`);
})