const mongoose = require('mongoose')
const Schema = mongoose.Schema

const postSchema = new Schema({
    title: String,
    text: String,
    published_data: { type: Date, default: Date.now}
})

module.exports = mongoose.model('post', postSchema)