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


var onConnected = function (error, database, request) {
    database.collection("new").find().toArray(function (p1, p2) {
        if (!error) insertIpOfThisUser(database);
    });
};

function User(ip) {
    this.ip = ip;
    this.count = 0;
}


var insertIpOfThisUser = function (database) {

    var user = new User(userIp(request));
    var thisIp = user.ip;
    database.collection(config.mongoCollectionName).find({

    });
};


/* GET home page. */

router.get('/sites/:cameFrom', function (req, res, next) {
    //mongoConnector.execute(onConnected);
    request = req;
    cameFrom = req.params['cameFrom'];
    res.send(cameFrom);
});

router.get('/', function (req, res) {

    fs.readFile(__dirname + "/../public/MyProfile.html", "utf8", function (err, resp) {
        res.send(resp);
    })
});

router.get('/privacy-policy', function (req, res) {

    fs.readFile(__dirname + "/../public/privacy-policy.html", "utf8", function (err, resp) {
        res.send(resp);
    })

});

module.exports = router;
