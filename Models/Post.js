const mongoose = require('mongoose');

const Post = mongoose.Schema(
    {
        title: {type: String, required : true, max: 255},
        content: {type: String, required : true, max: 5000},
        author: {type: String, required: true},
        tags : [{type: String, max:50}],
        comments: [{
            type: Object, properties: {
            author: {type : String, required: true},
            content: {type: String, required: true,max : 1000},
            createdAt: {type: Date, default: Date.now()}
            }
        }]
        }
)

module.exports = mongoose.model("Post",Post);