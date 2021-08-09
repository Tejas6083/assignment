const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    user_name: {
        type: String,
        reuired: true,
        unique: true,
        maxlength: 128,
    },
    phonenumber: {
        type: String,
        required: true,
        unique: true,
        maxlength: 30,
    },
    overview: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'overView'
    }
});

userSchema.virtual('overView', {
    ref: 'overView',
    localField: '_id',
    foreignField: 'owner'
});


const user = mongoose.model('user', userSchema);

module.exports = user;