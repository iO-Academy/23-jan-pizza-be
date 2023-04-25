const ToppingsController = require('../Controllers/ToppingsController')

const routes = (app) => {
    app.get('/', (req, res) => {
        res.send('hello world')
    })

    app.get('/toppings', ToppingsController.getAllToppings)

}

module.exports = routes