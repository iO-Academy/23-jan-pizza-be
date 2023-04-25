const express = require('express')
const routes = require('./Config/routes')

const app = express()

routes(app)

module.exports = app