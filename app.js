// define modules
const express = require('express')
const app = express();
const path = require('path')
const ejs = require('ejs')
const mongoose = require('mongoose')

// routes
const index = require('./routes/index')
const post = require('./routes/post')

// node app port
const PORT = 3000

// routes
app.use('/', index)
app.use('/post', post)

//ejs set
app.set('views', path.join(__dirname, 'views'))
app.set("view engine", "ejs");

// style sheet set
app.use(express.static(__dirname + '/public'))

// connnect mongo server
var db = mongoose.connection;
db.on('error', console.error);
db.once('open', function(){
    // CONNECTED TO MONGODB SERVER
    console.log("Connected to mongod server");
});

const mongo_pw = "p%40ssWord123"
mongoose.connect('mongodb+srv://velopert:'+mongo_pw+'@sharks-mongo-xchux.mongodb.net/test?retryWrites=true&w=majority');


// run app
app.listen(PORT, () => {
    console.log(PORT)
})