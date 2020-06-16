const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Posts = new Schema(
 {
     author: {type: String, required: true },
     img: {type: String, required: true },
     post: {type: String, required: true },
     title: {type: String, required: true }
 }, 
    {timestamps: true}
)

module.exports = mongoose.model('posts', Posts)