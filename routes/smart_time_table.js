var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send("Just wait to see time table generator here");
});

module.exports = router;
