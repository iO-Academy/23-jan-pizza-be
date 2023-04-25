const ToppingsController = require('../Controllers/ToppingsController')

const routes = (app) => {
    //this can be deleted, was just using this as a test to the URL
    app.get('/', (req, res) => {
        res.send('hello world')
    })

    app.get('/toppings', ToppingsController.getAllToppings)

}

module.exports = routes