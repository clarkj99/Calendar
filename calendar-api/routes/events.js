const express = require('express');
const router = express.Router();
const connectDB = require('../server/connect-db')

/* GET events . */
router
    .get('/', async function (req, res, next) {
        const db = await connectDB()
        const events = await db.collection("events")
            .find({})
            .toArray()
            .then(items => {
                res.json(items);
            })
    })

    .post('/', function (req, res, next) {
        sampleData.push(req.body)
        res.json(sampleData)
    })

module.exports = router;
