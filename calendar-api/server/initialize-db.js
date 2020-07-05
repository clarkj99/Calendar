const initialEvents = require('./initialEvents')
const connectDB = require('./connect-db')

async function initializeDB() {
    const db = await connectDB()
    for (let collectionName in initialEvents) {
        let collection = db.collection(collectionName)
        await collection.insertMany(initialEvents[collectionName])
    }

}

initializeDB()