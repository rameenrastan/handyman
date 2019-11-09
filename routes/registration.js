var express = require('express');
var router = express.Router();
var expressValidator = require('express-validator');

const bcrypt = require('bcrypt');
const saltRounds = 10;


router.post('/register', function(req, res, next) {
  console.log(req.originalUrl);
  console.log(req.body.email);
  console.log(req.body.password);

  req.checkBody('first_name', 'FirstName field cannot be empty.').notEmpty();
  req.checkBody('email', 'The email you entered is invalid, please try again.').isEmail();
  req.checkBody('email', 'Email address must be between 4-100 characters long, please try again.').len(4, 100);
  req.checkBody('password', 'Password must be between 8-100 characters long.').len(8, 100);
  req.checkBody("password", "Password must include one lowercase character, one uppercase character, a number, and a special character.").matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.* )(?=.*[^a-zA-Z0-9]).{8,}$/, "i");
  // req.checkBody('passwordMatch', 'Password must be between 8-100 characters long.').len(8, 100);
  // req.checkBody('passwordMatch', 'Passwords do not match, please try again.').equals(req.body.password);

  const errors = req.validationErrors();

  if(errors) {
    console.log(`errors: ${JSON.stringify(errors)}`);
    res.sendStatus(400);
  } else {

    const first_name = req.body.first_name;
    const last_name = req.body.last_name;
    const email = req.body.email;
    const street_address = req.body.street_address;
    const city = req.body.city;
    const zip = req.body.zip;
    const password = req.body.password;
    const role = "Customer";
    const db = require('../db');

    bcrypt.hash(password, saltRounds, function(err, hash) {
      console.log(hash);
      db.query("INSERT INTO users (first_name, last_name, email, role, street_address, city, zip, password) VALUES (?, ?, ?, ?, ?, ?, ?, ?)", [first_name, last_name, email, role, street_address, city, zip, hash], function(error, results, fields) {
          if(error) throw error;

           res.sendStatus(200);
      });

    });

  }

});

module.exports = router;
