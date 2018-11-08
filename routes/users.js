var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  //res.send('respond with a resource');
  res.json([{
    id: 1,
    username: "julien"
  }, {
    id: 2,
    username: "jared"
  }, {
    id: 3,
    username: "wilson"
  }, {
    id: 4,
    username: "owen"
  }]);
});

module.exports = router;
