const ToppingsController = require('../Controllers/ToppingsController')

const routes = (app) => {
    app.get('/toppings', ToppingsController.getAllToppings)
}

module.exports = routes