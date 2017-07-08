var express = require('express');
var router = express.Router();
var path = require('path');
var config = require(path.join(__dirname, "..", "config"));
var ip = require("ipware");
var userIp = ip().get_ip;
var mongo = require(__dirname + "/../MongoOperations/connect");
var MongoClient = require("mongodb").MongoClient;





/* GET home page. */
router.get('/', function (req, res, next) {

    MongoClient.connect(config.mongoUri, function (error, database) {

        database.collection("new").find().toArray(function (p1, p2) {
            res.send(p2);
        });
        mongo.execute("bk");
    });

});

module.exports = router;
