const DBService = require("../Services/DBService")
const JsonResponseService = require('../Services/JsonResponseService')
const {ObjectId } = require('mongodb')

const getAllToppings = async (req, res) => {
    let queryFilter = {}

    const collection = await DBService('toppings')
    const data = await collection.find(queryFilter).toArray()
    res.json(JsonResponseService('all toppings displayed', data))
}

const addVoteToTopping = async (req, res) => {
    let id = new ObjectId(req.body.id)

    const collection = await DBService('toppings')
    let vote = await collection.updateOne({_id: id}, {$inc: {votes: 1}})
    if(vote.modifiedCount !== null) {
        res.json(JsonResponseService('it worked!'))
    } else {
        res.json(JsonResponseService('it did not work'))
    }
}

exports.getAllToppings = getAllToppings
exports.addVoteToTopping = addVoteToTopping