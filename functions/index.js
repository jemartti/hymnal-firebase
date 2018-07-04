const functions = require('firebase-functions');
const schedule = require('./schedule.json');

exports.fetchSchedule = functions.https.onRequest((request, response) => {
    response.status(200).send(schedule);
});
