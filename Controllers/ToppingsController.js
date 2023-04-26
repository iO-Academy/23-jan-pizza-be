const DBService = require("../Services/DBService")
const JsonResponseService = require('../Services/JsonResponseService')

const getAllToppings = async (req, res) => {
    let queryFilter = {}

    const collection = await DBService('toppings')
    const data = await collection.find(queryFilter).toArray()
    res.json(JsonResponseService('it worked', data))

    // res.send('Goodbye')
}


exports.getAllToppings = getAllToppings
