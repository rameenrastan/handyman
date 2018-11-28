const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// Route handlers
const users = require('./routes/api/users');
const profiles = require('./routes/api/profiles');
const services = require('./routes/api/services');

const app = express();

// Body-parser middlware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// DB config
const db = require('./config/keys').mongoURI;

// Connect to MongoDB
mongoose.connect(db, { useNewUrlParser: true })
  .then(() => console.log('MongoDB connected.'))
  .catch(error => console.log(error));

// Use Routes
app.use('/api/users', users);
// app.use('/api/profiles', profiles);
// app.use('/api/services', services);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}.`));