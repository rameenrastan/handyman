const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');

// Load User Model
const User = require('../../models/User');

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

module.exports = router;