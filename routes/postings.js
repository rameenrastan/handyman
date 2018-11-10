var express = require('express');
var router = express.Router();

/* GET postings page. */
router.get('/', function(req, res, next) {
    res.json([{
        post_id: 1,
        title: 'Plumber',
        name: 'Julien Thyriar',
        address: '123 Fake st',
        date: "12-16-2018"
      }, {
        post_id: 2,
        title: 'Electrician',
        name: 'Wilson La',
        address: '391 Fake st',
        date: "12-17-2018"
      }, {
        post_id: 3,
        title: 'Carpenter',
        name: 'Owen Li',
        address: '952 Fake st',
        date: "12-18-2018"
      }, {
        post_id: 4,
        title: 'Pool Boy',
        name: 'Jared Woo',
        address: '953 Fake st',
        date: "12-19-2018"
      }]);
});

module.exports = router;
