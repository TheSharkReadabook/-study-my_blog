const express = require('express')
const app = express.Router()

app.get('/', (req, res) => {
    res.render('post')
})


app.post('/views/post', (req, res) => {
    var post = new Post();
    post.tit = req.body.name;
    post.text = req.body.text;
    post.published_date = new Date(req.body.published_date);

    post.save(function(err){
        if(err){
            console.error(err);
            res.json({result: 0});
            return;
        }

        res.json({result: 1});

    });
});


module.exports = app