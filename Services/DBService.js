const {MongoClient, ServerApiVersion} = require("mongodb");
const uri = "mongodb+srv://<username>:<password>@cluster0.n5j2whs.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

const DBService = async () =>  {
    const connection = await client.connect()
    const db = connection.db('toppings')
    const collection = db.collection('toppings')
    return collection
}

module.exports = DBService