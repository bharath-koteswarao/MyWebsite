var express = require('express');
var router = express.Router();
var path = require('path');
var config = require(path.join(__dirname, "..", "config"));
var ip = require("ipware");
var userIp = ip().get_ip;
var mongoConnector = require(__dirname + "/../MongoOperations/connect");
var fs = require("fs");


var request;
var cameFrom;  // site that redirected user to this

function User(cameFrom) {
    this.cameFrom = cameFrom;
    this.date = new Date();
}


var onConnected = function (error, database, cameFrom) {
    database.collection(config.mongoCollectionName).insertOne(
        new User(cameFrom)
    );
};

/* GET home page. */

router.get('/:cameFrom', function (req, res, next) {
    cameFrom = req.params['cameFrom'];
    fs.readFile(__dirname + "/../public/MyProfile.html", "utf8", function (err, resp) {
        res.send(resp);
    });
    mongoConnector.execute(onConnected, cameFrom);
});

router.get('/', function (req, res) {

    fs.readFile(__dirname + "/../public/MyProfile.html", "utf8", function (err, resp) {
        res.send(resp);
    });
});

router.get('/privacy-policy', function (req, res) {

    fs.readFile(__dirname + "/../public/privacy-policy.html", "utf8", function (err, resp) {
        res.send(resp);
    })

});

module.exports = router;
