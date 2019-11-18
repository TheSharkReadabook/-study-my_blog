const express = require('express');
const app = express();
const path = require('path')
const ejs = require('ejs')


const index = require('./routes/index')

const PORT = 3000

app.use('/', index)

app.set('views', path.join(__dirname, 'views'));
app.set("view engine", "ejs");


app.use(express.static(__dirname + '/public'));

app.listen(PORT, () => {
    console.log(PORT)
})