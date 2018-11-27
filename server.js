const express = require('express');
const mongoose = require('mongoose');

// DB config
const db = require('./config/keys').mongoURI;

// Connect to MongoDB
mongoose.connect(db, { useNewUrlParser: true })
  .then(() => console.log('MongoDB connected.'))
  .catch(error => console.log(error));

const app = express();

app.get('/', (req, res) => {
  res.send("This works!");
})

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}.`));