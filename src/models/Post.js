const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    posts: [{
        heading: {
            type: String,
            required: true,
            trim: true 
        },
        body: {
            type: String,
            required: true,
            trim: true
        }
    }],
    user: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    }]
});

postSchema.virtual('users', {
    ref: 'user',
    localField: 'user',
    foreignField: '_id'
});

const post = mongoose.model('post', postSchema);

module.exports = post;
