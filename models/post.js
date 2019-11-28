const mongoose = require('mongoose')
const Schema = mongoose.Schema

const postSchema = new Schema({
    title: String,
    text: String,
    published_data: { type: Date, default: Date.now}
})


postSchema.static.create = function (payload){
  const post = new this(payload)
  return post.save()
}

postSchema.statics.findAll = function (){
  return this.find({});
}


// Find One by todoid
postSchema.statics.findOneByPostid = function (postid) {
  return this.findOne({ postid });
};

// Update by todoid
postSchema.statics.updateByPostid = function (postid, payload) {
  // { new: true }: return the modified document rather than the original. defaults to false
  return this.findOneAndUpdate({ postid }, payload, { new: true });
};

// Delete by todoid
postSchema.statics.deleteByPostid = function (postid) {
  return this.remove({ postid });
};

const Post = mongoose.model('Post', postSchema)

const post = new Post({
  postid: 1,
  content: 'mongognogmogmognog',
  completed: false
})

module.exports = mongoose.model('Post', postSchema)
