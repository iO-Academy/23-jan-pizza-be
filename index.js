const express = require('express')
const routes = require('./Config/routes')

const app = express()
const port = 8080

app.get('/', (req, res) => {
    res.send('hello world')
})

app.listen(port)