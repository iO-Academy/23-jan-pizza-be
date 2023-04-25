const ToppingsController = require('../Controllers/ToppingsController')

const routes = (app) => {
    app.get('/', (req, res) => {
        res.send('hello world')
    })

    app.get('/toppings', (req, res) => {
        res.send('hello')
    })

    // app.post('/toppings', ToppingsController.getAllToppings())

}

module.exports = routes