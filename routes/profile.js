var express = require('express');
var router = express.Router();

/* GET user profile page. */
router.get('/', function(req, res, next) {
    res.json([{ id: 1, content: 'At profile page - message from express'}])
});

module.exports = router;
