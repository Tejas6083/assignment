const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    heading: {
        type: String,
        required: true,
        trim: true 
    },
    body: {
        type: String,
        required: true,
        trim: true
    },
    owner : {
        type : mongoose.Schema.Types.ObjectId,
        required : true,
        trim: true,
        unique: true,
        ref : 'user'
    }
});

postSchema.virtual('users', {
    ref: 'user',
    localField: 'owner',
    foreignField: '_id'
});

const user_post = mongoose.model('user_post', postSchema);

module.exports = user_post;
