var express = require('express');
var router = express.Router();
var path = require('path');
var config = require(path.join(__dirname, "..", "config"));
var fs = require("fs");


/* GET home page. */

router.get('/', function (req, res) {

    fs.readFile(__dirname + "/../public/index.html", "utf8", function (err, resp) {
        res.send(resp);
    });
});


router.get('/privacy-policy', function (req, res) {

    fs.readFile(__dirname + "/../public/privacy-policy.html", "utf8", function (err, resp) {
        res.send(resp);
    })

});

module.exports = router;
