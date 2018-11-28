const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Load User Model
const User = require('../../models/User');

// Load Secret key
const key = require('../../config/keys').secretOrKey;

// This is just a test route...
router.get('/test', (req,res) => {
  res.json({ msg: 'it works! From Handyman' });
});

//@route POST api/users/register
//@desc Register user
//@access PUBLIC
router.post('/register', (req,res) => {
  User.findOne({ email: req.body.email })
    .then(foundUser => {
      if(foundUser) {
        res.status(400).json({ email: 'Email entered already exists.' })
      } else {
        const { name, email, password } = req.body;
        bcrypt.hash(password, 10, (err, hash) => {
          if(err) throw err;
          const newUser = new User({ name, email, password: hash });
          newUser.save()
            .then(user => res.json(user))
            .catch(err => console.log(err));
        });
      }
    })
    .catch(err => res.status(400).json({ error: err }));
});


//@route POST api/users/login
//@desc Login user
//@access Public
router.post('/login', (req, res) => {
  const { email, password } = req.body;
  User.findOne({ email })
    .then(user => {
      // if user does not exist
      if(!user) {
        res.status(400).json({ error: 'Email or password is incorrect. Plesae try logging in again.'});
      } 
      // Check password
      bcrypt.compare(password, user.password)
        .then(isMatch => {
          if(isMatch) {
            // create JWT if matched
            console.log(user);
            const payload = { id: user._id, name: user.name }; // payload
            jwt.sign(payload, key, { expiresIn: 3600 }, (error, token) => { res.json({ success: true, token: 'Bearer ' + token}); 
            });
          } else {
            res.status(400).json({ error: 'Email or password is incorrect. Please try logging in again.'})
          }
        });
    })
    .catch(err => res.status(400).json({ error: err }));
});

module.exports = router;