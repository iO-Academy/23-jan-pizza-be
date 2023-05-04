const ToppingsController = require('../Controllers/ToppingsController')

const routes = (app) => {
    app.get('/toppings', ToppingsController.getAllToppings)

    app.put('/toppings', ToppingsController.addVoteToTopping)
}



module.exports = routes