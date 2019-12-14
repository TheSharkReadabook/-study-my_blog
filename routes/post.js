const express = require('express')
const Post = require('../models/post')
const app = express.Router()

app.get('/', (req, res) => {
  Post.findAll()
  .then((posts) => {
    if (!posts.length) return res.status(404).send({ err: 'post not found from get /'})
    res.render('posts', {data:posts})
  })
  .catch(err => res.status(500).send(err))
})

app.get('/postid/:postid', (req, res) => {
  Post.findOneByPostid(req.params.postid)
  .then((post) => {
    if (!post) return res.status(404).send({ err: 'post not found from get /postid:/postid '})
    // res.send(`findone successfully: ${post}`)
    res.render('post', {data:post})
  })
  .catch(err => res.status(500).send(err))
})

// this is example. it would be comment code.
app.post('/', (req, res) => {
  Post.create(req.body)
  console.log('req.body' + req.body)
  .then(post => res.send(post))
  .catch(err => res.status(500).send(err))
})

app.get('/write', (req, res) => {
  res.render('write')
})

app.post('/write', (req, res) => {
  Post.create(req.body)
  // console.log('req.body' + req.body)
  .then(post => res.send(post))
  .catch(err => res.status(500).send(err))
})

app.put('/postid/:postid', (req, res) => {
  Post.updateByPostid(req.params.postid, req.body)
    .then(post => res.send(post))
    .catch(err => res.status(500).send(err));
});

app.delete('/postid/:postid', (req, res) => {
  Post.deleteByPostid(req.params.postid)
    .then(() => res.sendStatus(200))
    .catch(err => res.status(500).send(err));
});

module.exports = app
