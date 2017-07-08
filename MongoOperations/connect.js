/**
 * Created by koteswarao on 08-07-2017.
 */

var path = require("path");
var config = require(path.join(__dirname, "..", "config"));
var MongoClient = require("mongodb").MongoClient;


exports.execute = function (callback, req) {
    MongoClient.connect(config.mongoUri, function (error, database) {
        callback(error, database);
    });
};