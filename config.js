/**
 * Created by koteswarao on 08-07-2017.
 */

var config = {
    db: "my-personal-website",
    mongoUri: "mongodb://practice:practice@cluster0-shard-00-00-shj3q.mongodb.net:27017,cluster0-shard-00-01-shj3q.mongodb.net:27017,cluster0-shard-00-02-shj3q.mongodb.net:27017/" + this.db + "?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin",
    mongoCollectionName: "bharat-koteswarao",
    herokuAppName: this.mongoCollectionName
};

module.exports = config;