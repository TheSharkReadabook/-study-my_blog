// define modules
const express = require('express')
const app = express();
const path = require('path')
const ejs = require('ejs')
const mongoose = require('mongoose')
const bodyParser = require('body-parser');


// user define models
const post_db = require('./models/post')


// routes
const index = require('./routes/index')
const post = require('./routes/post')

// node app port
const PORT = 3000

// routes
app.use('/', index)
app.use('/post', post)

//body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));

//ejs set
app.set('views', path.join(__dirname, 'views'))
app.set("view engine", "ejs");

// style sheet set
app.use(express.static(__dirname + '/public'))

// connnect mongo server
mongoose.Promise = global.Promise

const db = mongoose.connection;
db.on('error', console.error);
db.once('open', function(){
    // CONNECTED TO MONGODB SERVER
    console.log("Connected to mongod server")
});

const mongo_pw = "zkfmak"
const connection = mongoose.connect('mongodb+srv://velopert:'+mongo_pw+'@sharks-mongo-xchux.mongodb.net/test?retryWrites=true&w=majority')
connection,{ useNewUrlParser: true }, (err) => {
    if(err){
        console.err('[-]mongo connect err', err)
    }else{
        console.log('[*]mongo connected')
    }
};

// run app
app.listen(PORT, () => {
    console.log('node server running successfully', PORT)
})
