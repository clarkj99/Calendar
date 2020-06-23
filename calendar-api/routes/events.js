const express = require('express');
const router = express.Router();
const sampleData = [{ title: "Goat yoga", startTime: new Date(Date.UTC(2020, 4, 18, 14, 0, 0)), endTime: new Date(Date.UTC(2020, 4, 18, 14, 45, 0)) },
{ title: "Dental Cleaning", startTime: new Date(Date.UTC(2020, 5, 14, 16, 0, 0)), endTime: new Date(Date.UTC(2020, 5, 14, 17, 0, 0)) },
{ title: "Tee time", startTime: new Date(Date.UTC(2020, 5, 9, 11, 30, 0)), endTime: new Date(Date.UTC(2020, 5, 9, 15, 30, 0)) },
{ title: "Meet with plumber", startTime: new Date(Date.UTC(2020, 5, 9, 18, 0, 0)), endTime: new Date(Date.UTC(2020, 5, 9, 20, 0, 0)) }, { title: "Date with Adele", startTime: new Date(Date.UTC(2020, 5, 9, 23, 30, 0)), endTime: new Date(Date.UTC(2020, 5, 10, 2, 30, 0)) }]

/* GET events . */
router
    .get('/', function (req, res, next) {
        res.json(sampleData);
    })

    .post('/', function (req, res, next) {
        sampleData.push(req.body)
        res.json(sampleData)
    })

module.exports = router;
