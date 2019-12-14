
const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    postid: String,
    title: String,
    content: String,
    published_date: { type: Date, default: Date.now}
})

postSchema.static.create = function (payload){
  console.log('payload' + payload)
  const post = new this(payload)
  console.log('post' + post)
  return post.save()
}

postSchema.statics.findAll = function (){
  return this.find({});
}

postSchema.statics.findOneByPostid = function (postid) {
  return this.findOne({ postid });
};

postSchema.statics.updateByPostid = function (postid, payload) {
  // { new: true }: return the modified document rather than the original. defaults to false
  return this.findOneAndUpdate({ postid }, payload, { new: true });
};

postSchema.statics.deleteByPostid = function (postid) {
  return this.remove({ postid });
};

// // create model
// const Post = mongoose.model('Post', postSchema)

// // create document

// // model instance(= document)

// const trip = new Post({
//   postid: 1,
//   title: 'totitititiit',
//   content: 'mongognogmogmognog',
//   completed: false
// })


// // document instance method
// if(trip){
//   var save_result = trip.save
//   .then(() => console.log('Saved successfully'))
//   if(save_result){
//     // statics model methods(statics)
//     Post.find({ }, (err, post) => {
//       if(err) throw err
//       console.log('first'+post)
//     })
//   }else{
//     console.log('save result is empty')
//   }
// }


// Post.find({})
//   .then(post => console.log('second'+post))
//   .catch(err => console.log(err))


// add data
// var Post = mongoose.model('Post', postSchema)
// var newPost = new Post (
//   {
//     postid:'1',
//     title: 'my post',
//     content: 'my post content'
// })

// newPost.save( (err, data) => {
//   if(!err) console.log('saved!')
//   else console.log(err);
// })


module.exports = mongoose.model('Post', postSchema)























