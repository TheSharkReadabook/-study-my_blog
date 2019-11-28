const express = require('express')
const Post = require('../models/post')
const app = express.Router()

app.get('/', (req, res) => {
  Post.findAll()
  .then((posts) => {
    if (!posts.length) return res.status(404).send({ err: 'post not found from /'})
    res.send(`find successfully: ${posts}`)
  })
  .catch(err => res.status(500).send(err))
})

app.get('/postid:/postid', (req, res) => {
  Post.findOneByPostid(req.params.postid)
  .then((todo) => {
    if (!post) return res.status(404).send({ err: 'post not found from postid'})
    res.send(`findone successfully: ${post}`)
  })

  .catch(err => res.status(500).send(err))
})

app.post('/', (req, res) => {
  Post.create(req.body)
  .then(post => res.send(post))
  .catch(err => res.status(500).send(err))
})

app.put('/postid/:postid', (req, res) => {
  Post.updateByPostid(req.params.postid, req.body)
    .then(post => res.send(post))
    .catch(err => res.status(500).send(err));
});

// Delete by todoid
app.delete('/postid/:postid', (req, res) => {
  Post.deleteByPostid(req.params.postid)
    .then(() => res.sendStatus(200))
    .catch(err => res.status(500).send(err));
});

module.exports = app
