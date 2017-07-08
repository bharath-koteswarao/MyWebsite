var express = require('express');
var router = express.Router();
var ip = require("ipware");
var userIp = ip().get_ip;

/* GET home page. */
router.get('/', function (req, res, next) {
    console.log(userIp(req));
    res.send(userIp(req));
});

module.exports = router;
