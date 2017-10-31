/**
 * Created by koteswarao on 31-10-2017.
 */
var days = require('config').weekdays;
function TimeTable() {
    this.weekdays = [days.monday, days.tuesday, days.wednesday, days.thursday, days.friday, days.saturday, days.sunday]

}
module.exports = new TimeTable();