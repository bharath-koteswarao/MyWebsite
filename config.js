/**
 * Created by koteswarao on 08-07-2017.
 */

var config = {
    db: "my_website",
    db_user: "bvsbrk",
    db_password: "9966154851",
    mongoUri: 'mongodb://' + this.db_user + ':' + this.db_password + '@ds153422.mlab.com:53422/my_website',
    mongoCollectionName: "siteStats",
    herokuAppName: this.mongoCollectionName,
    weekdays: {
        monday: "monday",
        tuesday: "tuesday",
        wednesday: "wednesday",
        thursday: "thursday",
        friday: "friday",
        saturday: "saturday",
        sunday: "sunday"
    }
};

module.exports = config;