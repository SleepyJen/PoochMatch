const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;
const Colors = require('colors');

const mongoose = require('mongoose');
const MONGO_URI =
    process.env.MONGODB_URI || "mongodb://localhost/pooch_match";

mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).then(() => {
    console.log('Connected to Database'.red);
    console.log('------------------------------'.rainbow);
}).catch(err => console.log(err));

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
}

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(PORT, () => {
    console.log('\n------------------------------'.rainbow);
    console.log(`listening on http://localhost:${PORT}`.blue);
});