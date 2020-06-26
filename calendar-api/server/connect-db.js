const MongoClient = require('mongodb').MongoClient
const url = 'mongodb://localhost:27018/calendar'
let db = null;

async function connectDB() {
    let client = await MongoClient.connect(url, { useUnifiedTopology: true })
    db = client.db()
    console.log("Got DB", db);
    return db
}

module.exports = connectDB