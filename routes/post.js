const express = require('express')
const app = express.Router()


app.get('/post', (req, res) => {
    res.render('post')
})

module.exports = app